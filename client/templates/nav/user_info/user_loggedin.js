Template.user_loggedin.helpers({
	userName: function () {
		
		return Meteor.user().profile.name;
	}
});

Template.user_loggedin.events({
	'click #user_profile': function () {
		
		MaterializeModal.display({
	 	    bodyTemplate: "user_profile",
	 	    footerTemplate: "user_profile_footer"

		});
	}
});