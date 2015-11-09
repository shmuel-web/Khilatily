Template.user_menu.events({
	'click #new-message': function () {
		MaterializeModal.display({
		    
	 	    bodyTemplate: "new_message",
	 	    bottomSheet: true
	 	    
		});
	}
});