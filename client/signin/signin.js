Template.signin.events({
	'click .btn': function(e) {
		var email = $('#email').val();
		console.log(email)
		var password = $('#password').val();
		console.log(password);
		Meteor.loginWithPassword(email, password, function(err) {
			if (!err) {
				Router.go('dashboard');
			} else {
				console.log(err)
				Materialize.toast(err, 3000)
			}
		});
	}
})