Template.nav.rendered = function () {
	// Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
};

Template.nav.helpers({
    tColor:function(){
        return Session.get('thameColor')
    },
    icon:function(){
        if (Session.get('bottomsheetOpen')){

            return "arrow_downward";
        }else{
            return "menu";
        }
    }
})
