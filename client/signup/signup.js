Template.signup.events({
	'click .signUp': function(e) {
		var first = $('#first_name').val();
		var last = $('#last_name').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();
		if (password != confirm) {
			return;
		}

		Accounts.createUser({
			username: first + last,
			email: email,
			password: password,
			profile: {
				first: first,
				last: last
			}
		});

		Router.go('/add')
	}
})