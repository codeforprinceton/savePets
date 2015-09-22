// The index.js controller is responsible for opening the right top-level window depending on which platform the application is running. 

function openCriteria() {

// get the detail controller and window references

	var controller = Alloy.createController('criteria');
	var win = controller.getView();

	if (OS_IOS) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();	
	}

}


function openContactUS() {

// get the detail controller and window references

	var controller = Alloy.createController('contact');
	var win = controller.getView();

	if (OS_IOS) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();	
	}

}



function openDonate() {

// get the detail controller and window references

	var controller = Alloy.createController('donate');
	var win = controller.getView();

	if (OS_IOS) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();	
	}

}


function openSurvey() {

// get the detail controller and window references
	var controller = Alloy.createController('survey');
	var win = controller.getView();
	
	if (OS_IOS) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();
	}
}
    
// if IOS, then attach index to navgroup which gives all pages a 'back' button automatically
if (OS_IOS) {
	Alloy.Globals.navgroup = $.indexNAV;
}

//$.genericWin.setBackgroundImage('/images/1.jpg');

// open the index view
if (OS_ANDROID) {
	$.indexNAV.getView().open();
} else {
	$.indexNAV.open();
}

function onClose(e) {
	alert("Closing time !");
}
