if (Options.find().count() === 0){


	Options.insert({
		name: 'ארועים מיוחדים',
		route: 'special_events'
	});

	Options.insert({
		name: 'מבצעים',
		route: 'sales'
	});

	Options.insert({
		name: 'עסקים',
		route: 'business'
	});

	Options.insert({
		name: 'שירותים',
		route: 'services'
	});

	Options.insert({
		name: 'עזרה הדדית',
		route: 'mutual_help'
	});

	// Options.insert({
	// 	name: 'פינת אבידות',
	// 	route: 'lost&founds'
	// });
}

if (Messages.find().count() === 0){

	Messages.insert({
		text: 'מחפש טרמפ לירושלים'
	
	});

	Messages.insert({
		text: 'חבית גדולה למסירה'
	
	});

	Messages.insert({
		text: 'ה הוא המלך'
	
	});

	Messages.insert({
		text: 'מחפש טרמפ לירושלים'
	
	});

	Messages.insert({
		text: 'חבית גדולה למסירה'
	
	});

	Messages.insert({
		text: 'ה הוא המלך'
	
	});
}