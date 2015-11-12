Template.special_events.helpers({
    messages: function () {

        return Messages.find({type: 'special_events'});
    }
});