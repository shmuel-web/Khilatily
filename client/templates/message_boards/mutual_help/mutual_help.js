Template.mutual_help.helpers({
    messages: function () {

        return Messages.find({type: 'mutual_help'});
    }
});