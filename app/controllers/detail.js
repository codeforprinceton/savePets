// this is where the LOOKUP happens!
// receive the parameters passed into the args variable 

var args = arguments[0] || {};

var stats;

if (args.petType === 'dog') {
 	stats = dogdata[args.name];
}

if (args.petType === 'cat') {
 	stats = catdata[args.name];
}

if (args.petType === 'puppy') {
 	stats = puppydata[args.name];
}

if (args.petType === 'kitten') {
 	stats = kittendata[args.name];
}
	
if (OS_ANDROID) {
	$.name.text = 'NAME: ' + args.name;
} else if (OS_IOS && Alloy.isTablet){
	$.detail.title = 'PET NAME: ' + args.name;
} else if (OS_IOS && Alloy.isHandheld){
	$.detail.title = args.name;
}
$.displaygender.text = 'Gender: ' + stats.gender;
$.displaybreed.text = 'Breed: ' + stats.breed;
$.displayage.text = 'Age: ' + stats.age;
$.displaysize.text = 'Size: ' + stats.size;
$.displayabout.text = 'Details: ' + stats.about;
$.displayphoto.image = stats.photo;


function submit(){
	
	//Titanium.UI.createAlertDialog({title: 'About to attach the following file for ' + args.name, message: 'File Name is : ' + stats.photo}).show();

	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = "Hello from Titanium";
	emailDialog.toRecipients = ['animanis@hotmail.com','iccha02@gmail.com', 'beneh.mathew@gmail.com'];
	emailDialog.messageBody = 'Your interest in ' + args.name + ' is noted. We will get back to you shortly!';

	var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, stats.photo);
	emailDialog.addAttachment(f);
	emailDialog.open();
}



