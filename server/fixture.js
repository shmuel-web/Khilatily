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
		name: 'עסקים מקומיים',
		route: 'business'
	});


	Options.insert({
		name: 'עזרה הדדית',
		route: 'mutual_help'
	});

	Options.insert({
		name: 'פינת אבידות',
		route: 'lost_found'
	});
}

if (Messages.find().count() === 0){

	Messages.insert({
		text: 'מחפש טרמפ לירושלים',
		user_name: 'shmuel'
	
	});

	Messages.insert({
		text: 'חבית גדולה למסירה',
		user_name: 'shmuel'
	
	});

	Messages.insert({
		text: 'ה הוא המלך',
		user_name: 'shmuel'
	
	});

	Messages.insert({
		text: 'מחפש טרמפ לירושלים',
		user_name: 'shmuel'
	
	});

	Messages.insert({
		text: 'חבית גדולה למסירה',
		user_name: 'shmuel'
	
	});

	Messages.insert({
		text: 'ה הוא המלך',
		user_name: 'shmuel'
	
	});
}