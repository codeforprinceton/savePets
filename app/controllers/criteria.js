function clickImage(e) {
	Titanium.UI.createAlertDialog({title:'NOT Image View', message:'Why did you click me?'}).show();
}

function focusTextField() {
    //$.itemField.focus();
}

function closeKeyboard(e) {
    e.source.blur();
}

/*function updateLabel(e){
//    $.label.text = String.format("%3.1f", e.value);
    $.label_slider.text = String.format("%d", e.value);
}
*/
function changepickerDog(e){
	if(e.value === true){
		$.dogbreedrow.visible = 'true';
		$.dogrow.height = 200;
	}else{
		$.dogbreedrow.visible = 'false';
		$.dogrow.height = 60;
	}
}

function changepickerCat(e){
	if(e.value === true){
		$.catbreedrow.visible = 'true';
		$.catrow.height = 200;
	}else{
		$.catbreedrow.visible = 'false';
		$.catrow.height = 60;
	}
}

function changepickerKitten(e){
	if(e.value === true){
		$.kittenbreedrow.visible = 'true';
		$.kittenrow.height = 200;
	}else{
		$.kittenbreedrow.visible = 'false';
		$.kittenrow.height = 60;
	}
}

function changepickerPuppy(e){
	if(e.value === true){
		$.puppybreedrow.visible = 'true';
		$.puppyrow.height = 200;
	}else{
		$.puppybreedrow.visible = 'false';
		$.puppyrow.height = 60;
	}
}


function openMaster() {
	
	//Titanium.UI.createAlertDialog({title: $.dogbreedpicker.getSelectedRow(0).title, message: 'Message from openMaster'}).show();

	// Assign the breeds picked to the corresponding variables
	var catbreedpickedvalue = $.catbreedpicker.getSelectedRow(0).title;
	var dogbreedpickedvalue = $.dogbreedpicker.getSelectedRow(0).title;
	var puppybreedpickedvalue = $.puppybreedpicker.getSelectedRow(0).title;
	var kittenbreedpickedvalue = $.kittenbreedpicker.getSelectedRow(0).title;
	
	//Titanium.UI.createAlertDialog({title:'Visibility', message:$.dogbreedrow.visible}).show();

	// 'Force Clear' all values if the Pickers are hidden.
	// This is to prevent the behavior where the criteria page 'remembers' the picked value
	// even though the switch is set to OFF after returning from MASTER
	if ($.dogbreedrow.visible === 'false') {
		dogbreedpickedvalue = '';
	}
	
	if ($.catbreedrow.visible === 'false') {
		catbreedpickedvalue = '';
	}
	
	if ($.puppybreedrow.visible === 'false') {
		puppybreedpickedvalue = '';
	}
	
	if ($.kittenbreedrow.visible === 'false') {
		kittenbreedpickedvalue = '';
	}
	//Titanium.UI.createAlertDialog({title:'dogbreedpickedvalue', message:dogbreedpickedvalue}).show();


	// Create and open an instance of master.js and send the picked values 
	// as parameters/arguements in the form	of name:value pairs
	var controller = Alloy.createController('master', {catbreed: catbreedpickedvalue
													, dogbreed: dogbreedpickedvalue
													, puppybreed: puppybreedpickedvalue
													, kittenbreed: kittenbreedpickedvalue}
													);
	var win = controller.getView();

	// get dog stats by name
	//controller.setBoxerStats(e.row.fighterFullName);

	// open the detail window
	if (OS_IOS) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();
	}
}


//$.slider.text = $.slider.value;

// Populate the pickers with data from the appropriate collections

var DogbreedArray = [];

var pickerRow = Ti.UI.createPickerRow({title:'--ALL--'});
DogbreedArray.push(pickerRow);

_.each(dogdata, function(stats, name) {
	var pickerRow = Ti.UI.createPickerRow({title:stats.breed});
	DogbreedArray.push(pickerRow);
});

$.dogbreedpicker.add(DogbreedArray);




// Populate the pickers with data from the appropriate collections

var PuppybreedArray = [];

var pickerRow = Ti.UI.createPickerRow({title:'--ALL--'});
PuppybreedArray.push(pickerRow);

_.each(puppydata, function(stats, name) {
	var pickerRow = Ti.UI.createPickerRow({title:stats.breed});
	PuppybreedArray.push(pickerRow);
});

$.puppybreedpicker.add(PuppybreedArray);




// Populate the pickers with data from the appropriate collections

var KittenbreedArray = [];

var pickerRow = Ti.UI.createPickerRow({title:'--ALL--'});
KittenbreedArray.push(pickerRow);

_.each(kittendata, function(stats, name) {
	var pickerRow = Ti.UI.createPickerRow({title:stats.breed});
	KittenbreedArray.push(pickerRow);
});

$.kittenbreedpicker.add(KittenbreedArray);







// Populate the pickers with data from the appropriate collections

var CatbreedArray = [];

var pickerRow = Ti.UI.createPickerRow({title:'--ALL--'});
CatbreedArray.push(pickerRow);

_.each(catdata, function(stats, name) {
	var pickerRow = Ti.UI.createPickerRow({title:stats.breed});
	CatbreedArray.push(pickerRow);
});

$.catbreedpicker.add(CatbreedArray);








