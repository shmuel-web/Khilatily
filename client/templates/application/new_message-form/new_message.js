Template.new_message.onRendered(function () {
  // Use the Packery jQuery plugin
  $('select').material_select();
});


Template.new_message.helpers({
	options: function () {
		return Options.find();
	}
});

Template.new_message.events({
	'submit form': function (event) {
		event.preventDefault();
		var text = $('[name=text]').val();
		Messages.insert({
			text: text
		},function(error){
			if (error) {
				//erorr hendling
        		MaterializeModal.close();//close modal
        		Materialize.toast("קרתה תקלה הודעתך לא נקלטה", 5000, "red");
			}
			else{
				// sucsess
        		//remove spinerr
        		MaterializeModal.close();//close modal
        		Materialize.toast("נפלא! הודעתך נקלטה", 5000, "green");//show sucsess toast
			}
		});
	}
});

