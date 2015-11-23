Template.simple_message.events({
    'click .card.hoverable':function(){


        Session.set({
            card_id: this._id,
            thameColor:this.color,
            bottomsheetOpen:true
        });
        MaterializeModal.display({
            bodyTemplate: "message_big_view",
            closeLabel: null,
            opacity: 0,
            bottomSheet: true,
            callback: function(error, response) {
                Session.set({
                    thameColor: 'red',
                    bottomsheetOpen:false
                });

                if (error) {
                    console.error(error);
                } else {
                    console.log(response);
                }
            }
        });
    }
});

Template.simple_message.helpers({
    oneLineText: function(){
        return this.text.replace(/<br>/g," ");
    }
});
