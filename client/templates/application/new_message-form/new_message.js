Template.new_message.onRendered(function () {
    // Use the Packery jQuery plugin
    $('select').material_select();
    $('.datepicker').pickadate({
        labelMonthNext: 'חודש הבא',
        labelMonthPrev: 'חודש הקודם',
        labelMonthSelect: 'בחר חודש',
        labelYearSelect: 'בחר שנה',
        monthsFull: [ 'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת' ],
        weekdaysShort: [ 'א', 'שני', 'ג', 'ד', 'ה', 'ו', 'שבת' ],
        weekdaysLetter: [ 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש' ],
        today: 'היום',
        clear: 'ביטול',
        close: 'אישור'
    });
});


Template.new_message.helpers({
    options: function () {
        return Options.find();
    },
    tColor: Session.get('thameColor')
});

Template.new_message.events({
    'submit form': function (event) {
        event.preventDefault();
        var type = $('[name=type]').val();
        var headLine = $('[name=head-line]').val();
        var text = $('[name=text]').val().replace(/\n/g, "<br>");

        var userName = Meteor.user().profile.name;
        var createdBy = Meteor.userId();
        var color = Meteor.user().profile.color;
        Messages.insert({
            type: type,
            head_line: headLine,
            text: text,
            user_name: userName,
            created_by: createdBy,
            created_at: new Date(),
            color: color

        }, function (error) {
            if (error) {
                //erorr hendling
                MaterializeModal.close();//close modal
                Materialize.toast("קרתה תקלה הודעתך לא נקלטה", 5000, "red");
            }
            else {
                // sucsess
                //remove spinerr
                MaterializeModal.close();//close modal
                Materialize.toast("נפלא! הודעתך נקלטה", 5000, "green");//show sucsess toast
            }
        });
    },
    'click .lean-overlay':function(){
        Session.set('thameColor','red');
    }
});

