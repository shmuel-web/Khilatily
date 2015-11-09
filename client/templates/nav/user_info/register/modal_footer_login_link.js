Template.modal_footer_login_link.events({
	'click #trigger_login_modal': function () {
		debugger
		MaterializeModal.display({
		    title: "כניסה",
	 	    bodyTemplate: "login",
	 	    footerTemplate: "modal_footer_register_link"
	 	    
		});
	}
});