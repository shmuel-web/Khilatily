 Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
}, {
    name: 'home'
});

Router.route('/times', function () {
  this.render('times');
});

Router.route('/special_events', function () {
  this.render('special_events');
});

Router.route('/sales', function () {
  this.render('sales');
});

Router.route('/business', function () {
  this.render('business');
});

Router.route('/cheraty', function () {
  this.render('cheraty');
});

Router.route('/mutual_help', function () {
  this.render('mutual_help');
});

Router.route('/lost_found', function () {
  this.render('lost_found');
});


