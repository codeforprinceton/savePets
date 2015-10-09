
//function focusTextField() {
//	$.itemField.focus();
//}

//function closeKeyboard(e) {
//	e.source.blur();
//}

//function updateLabel(e) {
//	//    $.label.text = String.format("%3.1f", e.value);
//	$.label_slider.text=String.format("%d",e.value);
//}

function submit() {
	//Titanium.UI.createAlertDialog({title: 'BreedPicker', message: $.sampledogbreedpicker.getSelectedRow(0).title }).show();
	//Titanium.UI.createAlertDialog({title: 'Slider', message: $.slider.value }).show();
	//Titanium.UI.createAlertDialog({title: 'Switch', message: $.petswitch.value }).show();
	Titanium.UI.createAlertDialog({
	title:'Combined',message:'Breed picked is '+$.sampledogbreedpicker.getSelectedRow(0).title+' Energy Level is '+$.slider.value+' Owned pets before? '+$.petswitch.value}).show();
	var emailDialog=Ti.UI.createEmailDialog();
	emailDialog.subject="Hello from Titanium";
	emailDialog.toRecipients=['iccha02@gmail.com'];
	emailDialog.messageBody='<b>Appcelerator Titanium Rocks!</b>';
	var f=Ti.Filesystem.getFile('cricket.wav');
	emailDialog.addAttachment(f);
	emailDialog.open();
}

//$.slider.text=$.slider.value;