Template.register.events({
	'submit form ': function (event) {
		event.preventDefault();
		var name = $('[name=name]').val();
		var tel = $('[type=tel]').val();
		var email = $('[type=email]').val();
        var password = $('[type=password]').val();
		var gender = $('[name=gender]:checked').val();
		var color;
		if (gender == 'male') {
			 color = 'cyan';
		}else{
			 color = 'pink';
		}

        Accounts.createUser({
            email: email,
            password: password,
            profile: {
            	name: name,
            	tel: tel,
				gender: gender,
				color: color
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