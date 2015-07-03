if (!OS_IOS && !OS_ANDROID) {
	alert('This test app is currently only supported on iOS and Android');
} else {	
	// create an empty array called 'petdata'
	var petdata = {};
	
	var url = "http://api.petfinder.com/shelter.getPets?key=c47ceeacfad5856b4e795f8abf29db09&id=NJ143&format=json&count=1000&status=A";


	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
			// this function is called when data is returned from the server and available for use
	        // this.responseText holds the raw text return of the message (used for text/JSON)
	        // this.responseXML holds any returned XML (including SOAP)
	        // this.responseData holds any returned binary data
	        //------Ti.API.debug(this.responseText);
	       	// var pets = saveDataXML.getElementsByTagName("pets");
	       	// var petone = pets.item(0).getAttribute("name");]
				
				
	       	var saveDataJSON = JSON.parse(this.responseText);
	       	var pets = saveDataJSON.petfinder.pets.pet;
	        	        
	        for ( var i = 0; i < pets.length; i++) {
	        	petdata[pets[i].id.$t] = {
	        			'name' : pets[i].name.$t,
		        		'breed' : (typeof pets[i].breeds.breed.$t !== 'undefined') ? pets[i].breeds.breed.$t : 'Unlisted',
		        		'gender' : pets[i].sex.$t === 'M' ? 'Male' : 'Female',
		        		'photo' : pets[i].media.photos.photo[1].$t,
		        		'bigphoto' : pets[i].media.photos.photo[3].$t,
		        		'about' : pets[i].description.$t,
		        		'age' : pets[i].age.$t,
		        		'animal' : pets[i].animal.$t,
		        		'color' : "Blackish"
	        	};
	        }
	    },
	    onerror: function(e) {
			// this function is called when an error occurs, including a timeout
	        Ti.API.debug(e.error);
	        alert('Error while connecting to database');
	    },
	    timeout:5000  // in milliseconds	  
	});


	
	// get data using petfinder url in var xhr (opens an http client using url as parameter) 
	xhr.open("GET", url);
	xhr.send();  // request is actually sent with this statement
	
	//Ti.UI.setBackgroundImage( '/images/save.png' );
	//Ti.UI.setBackgroundColor('cyan');

}
