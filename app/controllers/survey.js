

function changeDay(e) {
//	$.volunteerday.text = $.volunteerdaylist.getSelectedRow(0).title;
}

function changeTime(e) {
//	$.volunteertime.text = $.volunteertimelist.getSelectedRow(0).title;
}

function submit() {
	//Titanium.UI.createAlertDialog({title: 'About to attach the following file for ' + args.name, message: 'File Name is : ' + stats.photo}).show();

	var emailDialog = Ti.UI.createEmailDialog();
	var volday = $.volunteerdaylist.getSelectedRow(0).title;
	var voltime = $.volunteertimelist.getSelectedRow(0).title;
	emailDialog.html = true;
	emailDialog.subject = "Volunteering inquiry for SAVE";
	emailDialog.toRecipients = ['animanis@hotmail.com','prafull2001@gmail.com'];
	emailDialog.messageBody = '<p>I am interested in volunteering at SAVE.</p>'
	 						+ '<p>I am available on the following days(s) of the week: ' + volday + '</p>'
	 						+ '<p>My preferred time of the day to volunteer is: ' + voltime + '.</p>'
	 						+ '<p>Experienced Pet owner?: ' + ($.petowner.value ? 'Yes' : 'No') + '.</p>'
	 						+ '<p>Experience volunteering before?: ' + ($.expvolunteer.value ? 'Yes' : 'No') + '.</p>'
	 						+ '<p>Thank you,</p>'
	 						+ '<b>' + $.volunteername.value + '</b>';
	//var f = Ti.Filesystem.getFile(stats.photo);
	//emailDialog.addAttachment(f);
	emailDialog.open();
	

}

//$.slider.text=$.slider.value;