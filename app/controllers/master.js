// The master.js view-controller, shown below, populates the TableView with TableViewRow objects. It uses the included Underscore library's
// each() function to iterate over each member of Alloy.Globals.data collection (defined in app/alloy.js) and creates a new TableViewRow
// from the app/views/row.xml view. The first argument passed to the Alloy.createController() is the view-controller's base name ("row") followed by
// the specific data for that row to display. Each new view-controller is pushed onto a local array named data, which is finally passed to the
// TableView object's setData() method.



function onSearchChange(e){
	$.pettable.searchText = e.source.value;
}

function onSearchFocus(e){
		$.searchBar.showBookmark = false;
		$.searchBar.showCancel = true;
}

function onSearchCancel(e){
	if(!_args.restrictToFavorites){
		$.searchBar.showBookmark = true;
		$.searchBar.showCancel = false;
	}	
	$.searchBar.blur();
}
		

function openDetail(e) {

	// get the detail controller and window references
	var controller = Alloy.createController('detail', {
		id : e.row.petID
	});
	// opens detail's view because controler was already created for detail in line above
	var win = controller.getView();

	// open the detail window
	if (OS_IOS) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();
	}
}

//Recieves sent arguments from criteria

var args = arguments[0] || {};
//Titanium.UI.createAlertDialog({title: args.dogbreed, message: 'Insert messege here'}).show();

var petdataArray = [];

// loop through the dogdata collection defined in alloy.js and copies each name:value pair to the variables 'name' and 'stats' to hold each item from
// that collection one at a time AND create a new row with it.
// Then 'push' the row onto the 'data' array
_.each(petdata, function(stats, id) {
	// Create a new instance of the ROW view and 'Push' it to the data table ONLY IF the BREED selected is ALL or the BREED Matches the Filter value
	
	var selectPet = false;

	// EMAPLE: If an animal is a dog, and if a breed or --ALL-- is selected,
	// the variable selectPet becomes true
	if (stats.animal === 'Dog') {
		if (args.dogbreed === '--ALL--' || args.dogbreed === stats.breed) {
			selectPet = true;
		}
	}

	if (stats.animal === 'Cat') {
		if (args.catbreed === '--ALL--' || args.catbreed === stats.breed) {
			selectPet = true;
		}
	}

	if (stats.animal === 'Kitten') {
		if (args.kittenbreed === '--ALL--' || args.kittenbreed === stats.breed) {
			selectPet = true;
		}
	}

	if (stats.animal === 'Puppy') {
		if (args.puppybreed === '--ALL--' || args.puppybreed === stats.breed) {
			selectPet = true;
		}
	}

	
	// if select pet is true, send arguments to row
	if (selectPet === true) {
		var controller = Alloy.createController('row', {
			pet_id_from_master : id,
			pet_name_from_master : stats.name,
			pet_breed_from_master : stats.breed,
			pet_gender_from_master : stats.gender,
			pet_age_from_master : stats.age,
			pet_type : stats.animal,
			pet_photo_from_master : stats.photo
		});
		var win = controller.getView();
		// add the newly created instance of the 'row' view-controller to the 'data' array
		petdataArray.push(win);

	}
});



// 'attach' the entire 'data' array to the TableView element called 'dogtable' on the master.xml view

$.pettable.setData(petdataArray);

