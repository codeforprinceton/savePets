// this is where the LOOKUP happens!
// receive the parameters passed into the args variable 

var args = arguments[0] || {};

var stats;

stats = petdata[args.id];
	
if (OS_ANDROID) {
	$.name.text = 'NAME: ' + stats.name;
} else if (OS_IOS && Alloy.isTablet){
	$.detail.title = 'PET NAME: ' + stats.name;
} else if (OS_IOS && Alloy.isHandheld){
	$.detail.title = stats.name;
}
$.displaygender.text = 'Gender:  ' + stats.gender;
$.displaybreed.text = 'Breed:  ' + stats.breed;
$.displayage.text = 'Age:  ' + stats.age;
$.displaysize.text = 'Size:  ' + stats.size;
$.displayabout.text = 'Details:  ' + stats.about;
$.displayphoto.image = stats.bigphoto;


function submit(){
	
	//Titanium.UI.createAlertDialog({title: 'About to attach the following file for ' + args.name, message: 'File Name is : ' + stats.photo}).show();

	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = "I am interested in a Pet at SAVE";
	emailDialog.toRecipients = ['animanis@hotmail.com','iccha02@gmail.com', 'beneh.mathew@gmail.com'];
	emailDialog.messageBody = 'Your interest in ' + stats.name + ', Pet ID ' + args.id + ' is noted. We will get back to you shortly!';

	//var f = Ti.Filesystem.getFile(stats.photo);
	//emailDialog.addAttachment(f);
	emailDialog.open();
}



