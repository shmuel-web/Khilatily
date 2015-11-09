Template.user_profile_footer.events({
	'click #logout': function () {
		debugger
		Meteor.logout(function(error){
			if (error){
				// err hendelrs
				MaterializeModal.close();//close modal
        		Materialize.toast("No!", 5000, "red");
			}
			else {
				MaterializeModal.close();//close modal
        		Materialize.toast("יצאת מהמערכת", 5000, "green");//show sucsess toast
			}
		});
	}
});	