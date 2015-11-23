Template.action_btn.events({
	'click #action_btn': function () {
		MaterializeModal.display({
		    
	 	    bodyTemplate: "new_message",
	 	    bottomSheet: true,
			closeLabel: null,
			submitLabel: null,
			opacity:0,
			callback: function(error, response) {
                Session.set({
                    thameColor:'red',
                    bottomsheetOpen:false
                });
			}
		});
		Session.set({
            thameColor:'teal',
            bottomsheetOpen:true
        });
	}
});