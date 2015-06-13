function openEmail() {
	
	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = "I Have a Question...";
	emailDialog.toRecipients = ['animanis@hotmail.com','iccha02@gmail.com', 'beneh.mathew@gmail.com'];
	emailDialog.open;
	
}
