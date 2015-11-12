Template.sales.helpers({
    messages: function () {

        return Messages.find({type: 'sales'});
    }
});