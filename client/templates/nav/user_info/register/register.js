Template.register.events({
	'submit form ': function (event) {
		event.preventDefault();
		var name = $('[name=name]').val();
		var tel = $('[type=tel]').val();
		var email = $('[type=email]').val();
        var password = $('[type=password]').val();
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
            	name: name,
            	tel: tel
            }
        },function(error){
        	if (error){
        		//erorr hendling
        		MaterializeModal.close();//close modal
        		Materialize.toast("No!", 5000, "red");
        	}
        	else{
        		// sucsess
        		//remove spinerr
        		MaterializeModal.close();//close modal
        		Materialize.toast("נפלא ההרשמה בוצעה בצלחה", 5000, "green");//show sucsess toast
        		
        	}
        });

        if (Meteor.logingin){
        	// show spiner suwhere
        }
         
        

	}
});