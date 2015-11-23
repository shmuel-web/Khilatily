Template.home.helpers({
	messages: function () {

		return Messages.find({}, {sort:{created_at:-1}, limit:12});
	}
});

Template.home.onRendered(function(){

});