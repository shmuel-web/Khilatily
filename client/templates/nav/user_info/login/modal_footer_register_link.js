Template.modal_footer_register_link.events({
	'click #trigger_register_modal': function () {
		debugger
		MaterializeModal.display({
		    title: "הרשמה",
	 	    bodyTemplate: "register",
	 	    footerTemplate: "modal_footer_login_link"

		});
	}
});