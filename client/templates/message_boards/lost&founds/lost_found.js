Template.lost_found.helpers({
    messages: function () {

        return Messages.find({type: 'lost_found'});
    }
});