Router.configure({
	layoutTemplate: 'layout'
})

Router.route('/', function() {
	this.render('home');
})

Router.route('/sign-up', function() {
	this.render('signup')
})

Router.route('/sign-in', function() {
	this.render('signin')
})