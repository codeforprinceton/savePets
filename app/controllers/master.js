// The master.js view-controller, shown below, populates the TableView with TableViewRow objects. It uses the included Underscore library's 
// each() function to iterate over each member of Alloy.Globals.data collection (defined in app/alloy.js) and creates a new TableViewRow 
// from the app/views/row.xml view. The first argument passed to the Alloy.createController() is the view-controller's base name ("row") followed by 
// the specific data for that row to display. Each new view-controller is pushed onto a local array named data, which is finally passed to the 
// TableView object's setData() method.

function openDetail(e) {

	// get the detail controller and window references
	var controller = Alloy.createController('detail',{
														name:e.row.petFullName, 
														petType:e.row.petType});
	// opens detail's view because controler was already created for detail in line above
	var win = controller.getView();
	
	// open the detail window
	if (OS_IOS) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();
	}
}

//Recieves arguments from criteria 

var args = arguments[0] || {};
//Titanium.UI.createAlertDialog({title: args.dogbreed, message: 'Insert messege here'}).show();

var petdataArray = [];


// loop through the dogdata collection defined in alloy.js and copies each name:value pair to the variables 'name' and 'stats' to hold each item from 
// that collection one at a time AND create a new row with it.
// Then 'push' the row onto the 'data' array
_.each(dogdata, function(stats, name) {
	// Create a new instance of the ROW view and 'Push' it to the data table ONLY IF the BREED selected is ALL or the BREED Matches the Filter value
	if(args.dogbreed === '--ALL--' || args.dogbreed === stats.breed){
		var controller = Alloy.createController('row', {pet_name_from_master: name, 
													pet_breed_from_master: stats.breed, 
													pet_gender_from_master: stats.gender, 
													pet_age_from_master: stats.age, 
													pet_type: 'dog',
													pet_photo_from_master: stats.photo});
		var win = controller.getView();
		// add the newly created instance of the 'row' view-controller to the 'data' array 
		//Titanium.UI.createAlertDialog({title: 'Currently Printing Dog', message: name}).show();
		petdataArray.push(win);
	}
	
});


// loop through the Alloy.Globals.data collection; using the variable 'stats' to hold each item from 
// that collection one at a time AND create a new row with it.
// Then 'push' the row onto the 'data' array

_.each(puppydata, function(stats, name) {
	// Create a new instance of the ROW view and 'Push' it to the data table ONLY IF the BREED Matches the Filter value
	if(args.puppybreed === '--ALL--' || args.puppybreed === stats.breed){
		var controller = Alloy.createController('row', {pet_name_from_master: name, 
													pet_breed_from_master: stats.breed, 
													pet_gender_from_master: stats.gender, 
													pet_age_from_master: stats.age, 
													pet_type: 'puppy',
													pet_photo_from_master: stats.photo});
		var win = controller.getView();
		// add the newly created instance of the 'row' view-controller to the 'data' array 
		//Titanium.UI.createAlertDialog({title: 'Currently Printing Puppy', message: name}).show();
		petdataArray.push(win);
	}
	
});


// loop through the Alloy.Globals.data collection; using the variable 'stats' to hold each item from 
// that collection one at a time AND create a new row with it.
// Then 'push' the row onto the 'data' array
_.each(catdata, function(stats, name) {
	// Create a new instance of the ROW view and 'Push' it to the data table ONLY IF the BREED Matches the Filter value
	if(args.catbreed === '--ALL--' || args.catbreed === stats.breed){
		var controller = Alloy.createController('row', {pet_name_from_master: name, 
													pet_breed_from_master: stats.breed, 
													pet_gender_from_master: stats.gender, 
													pet_age_from_master: stats.age, 
													pet_type: 'cat',
													pet_photo_from_master: stats.photo});
		var win = controller.getView();
		// add the newly created instance of the 'row' view-controller to the 'data' array 
		petdataArray.push(win);
	}
	
});


// loop through the Alloy.Globals.data collection; using the variable 'stats' to hold each item from 
// that collection one at a time AND create a new row with it.
// Then 'push' the row onto the 'data' array
_.each(kittendata, function(stats, name) {
	// Create a new instance of the ROW view and 'Push' it to the data table ONLY IF the BREED Matches the Filter value
	if(args.kittenbreed === '--ALL--' || args.kittenbreed === stats.breed){
		var controller = Alloy.createController('row', {pet_name_from_master: name, 
													pet_breed_from_master: stats.breed, 
													pet_gender_from_master: stats.gender, 
													pet_age_from_master: stats.age, 
													pet_type: 'kitten',
													pet_photo_from_master: stats.photo});
		var win = controller.getView();
		// add the newly created instance of the 'row' view-controller to the 'data' array 
		petdataArray.push(win);
	}
	
});





// 'attach' the entire 'data' array to the TableView element called 'dogtable' on the master.xml view 
//if (args.dogbreed != null) {	
$.pettable.setData(petdataArray);
//}

//if (args.catbreed != null) {
//$.pettable.setData(catdataArray);
//}


