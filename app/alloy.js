if (!OS_IOS && !OS_ANDROID) {
	alert('This test app is currently only supported on iOS and Android');
} else {
	doggiedata = {
		'Caya': {
			breed: 'Terrior Whippet',
			age: 'Young',
			size: "Medium",
			gender: 'Female',
			color: 'Yellow',
			photo: '/images/SAVEPhotos/Caya.jpg',
			about:'Caya is a good natured daschund. She is playfull and loves eating cabbage.'
			
		},
		'Marty': {
			breed: 'Cattle Dog',
			age: 'Adult',
			size: "Medium",
			gender: 'Male',
			color: 'Tricolor',
			photo: '/images/SAVEPhotos/Marty.jpg',
			about:'Marty is a loyal Golden Shepard. He is playfull. '
		},
		'Augustus': {
			breed: 'Beagle',
			age: 'Senior',
			size: "Medium",
			gender: 'Male',
			color: 'Tricolor',
			photo: '/images/SAVEPhotos/Augustus.jpg',
			about:'Augustus is a good natured dog. He is playfull and loves eating ice cream.'
		},
		'Loki Bear': {
			breed: 'Australian Husky Shepherd',
			age: 'Adult',
			size: "Large",
			gender: 'Male',
			color: 'Chocolate',
			photo: '/images/SAVEPhotos/LokiBear.jpg',
			about:'Loki Bear is a good natured Golden Lab. She is playfull and loves eating cake. '
		},
		'Bruce Wayne': {
			breed: 'Labrador Retriever & Chow Chow',
			age: 'Adult',
			size: "Large",
			gender: 'Male',
			color: 'Chocolate',
			photo: '/images/SAVEPhotos/BruceWayne.jpg',
			about:'Bruce Wayne is a good natured dog. He is playfull and loves eating cabbage.'
		},
		'Sasha': {
			breed: 'Pit Bull Terrier',
			age: 'Adult',
			size: "Large",
			gender: 'Female',
			color: 'Gray',
			photo: '/images/SAVEPhotos/Sasha.jpg',
			about:'Sasha is a good natured Pit Bull Terrier. She is playfull and loves eating cabbage.'
		},
		
	};
	
	catdata = {
		'Char': {
			breed: 'Domestic Short Hair',
			age: 'Senior',
			size: "Small",
			gender: 'Female',
			color: 'Black & White',
			photo: '/images/SAVEPhotos/Char.jpg',
			about:'Char is a good natured daschund. She is playfull and loves eating cabbage.'
			
		},
		'Donna': {
			breed: 'Domestic Short Hair',
			age: 'Adult',
			size: "Small",
			gender: 'Female',
			color: 'Black & White',
			photo: '/images/SAVEPhotos/Donna.jpg',
			about:'Donna is a loyal Golden Shepard. She is playfull. '
		},
		'Liberty': {
			breed: 'Domestic Short Hair',
			age: 'Young',
			size: "Small",
			gender: 'Female',
			color: 'Brown',
			photo: '/images/SAVEPhotos/Liberty.jpg',
			about:'Liberty is a good natured dog. She is playfull and loves eating ice cream.'
		},
		'Sophia': {
			breed: 'Domestic Short Hair',
			age: 'Senior',
			size: "Small",
			gender: 'Female',
			color: 'Black & White',
			photo: '/images/SAVEPhotos/Sophia.jpg',
			about:'Sophia is a good natured Golden Lab. She is playfull and loves eating cake. '
		},
		'Cracker Jack': {
			breed: 'Domestic Short Hair',
			age: 'Adult',
			size: "Small",
			gender: 'Male',
			color: 'Black',
			photo: '/images/SAVEPhotos/CrackerJack.jpg',
			about:'Cracker Jack is a good natured beagle. He is playfull and loves eating cabbage.'
		},
		'Lady': {
			breed: 'Domestic Short Hair',
			age: 'Senior',
			size: "Small",
			gender: 'Female',
			color: 'White',
			photo: '/images/SAVEPhotos/Lady.jpg',
			about:'Lady adores children.'
		},
		'Simba and Snookie': {
			breed: 'Domestic Short Hair',
			age: 'Adult',
			size: "Small",
			gender: 'Male',
			color: '<insert color here>',
			photo: '/images/SAVEPhotos/SimbaandSnookie.jpg',
			about:'Simba and Snookie are cats that always like to be around each other. They come as a package!'
			
		
		},
		'Rockette': {
			breed: 'Domestic Short Hair Tiger',
			age: 'Young',
			size: "Medium",
			gender: 'Female',
			color: 'Brown',
			photo: '/images/SAVEPhotos/Rockette.jpg',
			about:'Rockette loves playing with yarn. Warning! She does not like other cats!'

		},	
		'Knuckle': {
			breed: 'Domestic Short Hair',
			age: 'Adult',
			size: "Medium",
			gender: 'Female',
			color: 'Black',
			photo: '/images/SAVEPhotos/Knuckle.jpg',
			about:'Knuckle is very energetic, but can be very violent when aggrivated.'

		},	
		'Jackson': {
			breed: 'Domestic Short Hair',
			age: 'Senior',
			size: "Large",
			gender: 'Male',
			color: 'Black',
			photo: '/images/SAVEPhotos/Jackson.jpg',
			about:'Jackson is very mature in not scratching things. He is not very fond of kids.'

		},	
		'Tiff': {
			breed: 'Domestic Short Hair',
			age: 'Young',
			size: "Medium",
			gender: 'Female',
			color: 'Black',
			photo: '/images/SAVEPhotos/Tiff.jpg',
			about:'Tiff will eat any type of cat food you present to her.'

		},	
		'Barney': {
			breed: 'Domestic Short Hair',
			age: 'Adult',
			size: "Small",
			gender: 'Male',
			color: 'Grey',
			photo: '/images/SAVEPhotos/Barney.jpg',
			about:'Barney is very good about picking her spots to go to the bathroom.'

		},	
		'Hank': {
			breed: 'Jack Russell Terrier',
			age: 'Adult',
			size: "Small",
			gender: 'Male',
			color: 'Cream',
			photo: '/images/SAVEPhotos/Hank.jpg',
			about:'Hank is a little ball of energy that loves to chase people.'

		},	
		'Blanca': {
			breed: 'Domestic Short Hair',
			age: 'Young',
			size: "Medium",
			gender: 'Female',
			color: 'Black',
			photo: '/images/SAVEPhotos/Blanca.jpg',
			about:'Blanca is very loyal and playful.'

		},
		'Westie': {
			breed: 'Domestic Short Hair',
			age: 'Senior',
			size: "Medium",
			gender: 'Female',
			color: 'Dilute Calico',
			photo: '/images/SAVEPhotos/Westie.jpg',
			about:'Westie loves to cuddle, especially with children!'

		},		
		'Ruby': {
			breed: 'Domestic Short Hair',
			age: 'Adult',
			size: "Small",
			gender: 'Female',
			color: 'Gray',
			photo: '/images/SAVEPhotos/Ruby.jpg',
			about:'Ruby perfers seniors to take care of her.'

		},	
		'Dottie': {
			breed: 'Domestic Short Hair',
			age: 'Young',
			size: "Medium",
			gender: 'Female',
			color: 'Black',
			photo: '/images/SAVEPhotos/Dottie.jpg',
			about:'Dottie enjoys the company of other cats.'

		}
	};
	
	puppydata = {
		'Sam': {
			breed: 'Labrador',
			age: '6 y.o.',
			size: "Large",
			weight: '5 lbs',
			gender: 'Female',
			color: 'Black',
			photo: '/images/puppy.jpg',
			about:'Cutie is a good natured daschund. She is playfull and loves eating cabbage.'
			
		},
		'Jimmy': {
			breed: 'Golden Retriever',
			age: '6 y.o.',
			size: "Medium",
			weight: '9 lb',
			gender: 'Female',
			color: 'Black',
			photo: '/images/puppy.jpg',
			about:'Bella is a loyal Golden Shepard. He is playfull. '
		},
		'Shaniqua': {
			breed: 'Labrador',
			age: '6 y.o.',
			size: "Small",
			weight: '12 lb',
			gender: 'Male',
			color: 'Black',
			photo: '/images/puppy.jpg',
			about:'Striker is a good natured dog. He is playfull and loves eating ice cream.'
		},
		'Dexter': {
			breed: 'Doberman',
			age: '6 y.o.',
			size: "Small",
			weight: '20 lb',
			gender: 'Male',
			color: 'Black',
			photo: '/images/puppy.jpg',
			about:'Angus is a good natured Golden Lab. He is playfull and loves eating cake. '
		},
		'Thor': {
			breed: 'Doberman',
			age: '2 y.o.',
			size: "Large",
			weight: '10 lb',
			gender: 'Female',
			color: 'Black',
			photo: '/images/puppy.jpg',
			about:'Angus is a good natured beagle. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage.'
		},
		'Luna': {
			breed: 'Golden Lab',
			age: '1 y.o.',
			size: "Medium",
			weight: '11 lb',
			gender: 'Male',
			color: 'Black',
			photo: '/images/puppy.jpg',
			about:'Angus is a good natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage.'
		},
		'Gunner': {
			breed: 'Lhasa Apso',
			age: '5 y.o.',
			size: "Medium",
			weight: '14 lb',
			gender: 'Male',
			color: 'Black',
			photo: '/images/puppy.jpg',
			about:'Angus is a good natured Lab. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage.'
		}
	};
	
	kittendata = {
		'Spirit': {
			breed: 'Persian',
			age: '2 y.o.',
			size: "Large",
			weight: '10 lb',
			gender: 'Female',
			color: 'Black',
			photo: '/images/cat.jpeg',
			about:'Angus is a good natured beagle. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage.'
		},
		'Onyx': {
			breed: 'Bengal',
			age: '1 y.o.',
			size: "Medium",
			weight: '11 lb',
			gender: 'Male',
			color: 'Black',
			photo: '/images/cat.jpeg',
			about:'Angus is a good natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage.'
		},
		'Chubs': {
			breed: 'Tabby',
			age: '5 y.o.',
			size: "Medium",
			weight: '14 lb',
			gender: 'Male',
			color: 'Black',
			photo: '/images/cat.jpeg',
			about:'Angus is a good natured Lab. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage.'	
		},
		'Kyrk': {
			breed: 'Egyptian',
			age: '5 y.o.',
			size: "Medium",
			weight: '14 lb',
			gender: 'Male',
			color: 'Black',
			photo: '/images/cat.jpeg',
			about:'Angus is a good natured Lab. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage. Pookie is a great natured daschund. She is playfull and loves eating cabbage.'
		}
	};
	
	dogdata = {};
	
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
				
				
			//all this piece of code does is takes the name of the first pets breed from the inventory in petfinder pet and display 
	        //its name in an alert	      
	       	var saveDataJSON = JSON.parse(this.responseText);
	        //alert(JSON.stringify(saveDataJSON.petfinder.pets.pet[0].name.$t));
	        
	        
	        //all this piece of code does is takes the name of the first pets breed from the inventory in petfinder pet and display 
	        //its name in an alert 
	        //alert(JSON.stringify(saveDataJSON.petfinder.pets.pet[0].breeds.breed.$t));
	        //alert(JSON.stringify(saveDataJSON.petfinder.pets.pet[0]));
	        
	        //var petList = JSON.parse(JSON.stringify(saveDataJSON.petfinder.pets));
	        
	        //alert (JSON.stringify(saveDataJSON.petfinder.pets.length));
	        //alert (JSON.stringify(saveDataJSON.petfinder.pets.pet[0]));
	        //alert (JSON.stringify(saveDataJSON.petfinder.pets.pet[1]));
	        
			var dogStr = " { '";
	        for ( var i = 0; i < saveDataJSON.petfinder.pets.pet.length; i++) {
	        	var name = JSON.stringify(saveDataJSON.petfinder.pets.pet[i].name.$t);
	        	var breed = JSON.stringify(saveDataJSON.petfinder.pets.pet[i].breeds.breed.$t);	        	
	        	var age = JSON.stringify(saveDataJSON.petfinder.pets.pet[i].age.$t);
	        	var gender = JSON.stringify(saveDataJSON.petfinder.pets.pet[i].sex.$t);
				var photo = JSON.stringify(saveDataJSON.petfinder.pets.pet[i].media.photos.photo[1].$t);
				var about = JSON.stringify(saveDataJSON.petfinder.pets.pet[i].description.$t);
				var color = "Blackish";

				//alert (name + ', '  + breed + ', ' + age + ', ' + gender + ', ' + photo + ', ' + about);
				
				var petObject = name + "': {"
				+ " breed : '" + breed + "', "
				+ " gender : '" + gender + "', "
				+ " age : '" + age + "', "
				+ " color : '" + color + "', "
				+ " photo : '" + photo + "', "
				+ " about : '" + about + "'"
				+ " }";
				
				//alert (petObject);
				if (dogStr === " { '") {
					dogStr = petObject;					
				} else {
					dogStr = dogStr + ', ' + petObject;					
				}
	        }
	        
	        alert(dogStr);
	        
	        dogdata = JSON.parse(dogStr);
	        
	        //for (var eachpet in petList) {
	        //	alert(eachpet.name.$t);
	        //}
	        
	        
	        //alert('success');
	    },
	    onerror: function(e) {
			// this function is called when an error occurs, including a timeout
	        Ti.API.debug(e.error);
	        alert('error');
	    },
	    timeout:5000  /* in milliseconds */
	});
	xhr.open("GET", url);
	xhr.send();  // request is actually sent with this statement
	
}
