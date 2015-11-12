Template.business.helpers({
    messages: function () {

        return Messages.find({type: 'business'});
    }
});