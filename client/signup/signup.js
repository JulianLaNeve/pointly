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

		var files = $('input[type="file"]').prop("files");
		console.log(files[0]);

		var fileId = Images.insert(files[0], function(err, fileObj) {
			if (err) {
				console.log(err);
			} else {
				Accounts.createUser({
					username: first + last,
					email: email,
					password: password,
					profile: {
						first: first,
						last: last,
						imageId: fileObj._id
					}
				});
			};
		});

		Router.go('/dashboard')
	}
})