Template.signin.events({
	'click .btn': function(e) {
		var email = $('#email').val();
		var password = $('#password').val();

		Meteor.loginWithPassword(email, password)
	

		Router.go('dashboard');
	}
})