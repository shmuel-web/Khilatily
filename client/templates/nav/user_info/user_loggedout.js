Template.user_loggedout.events({
	'click .modal-trigger': function () {
		MaterializeModal.display({
		    title: "הרשמה",
	 	    bodyTemplate: "register",
	 	    footerTemplate: "modal_footer_login_link"
	 	    


		});
	}
});