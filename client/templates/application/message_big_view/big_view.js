Template.message_big_view.helpers({
    message: function () {
        return Messages.findOne({"_id": Session.get("card_id")});
    },
    tColor:function(){
    return Session.get('thameColor')
}



});