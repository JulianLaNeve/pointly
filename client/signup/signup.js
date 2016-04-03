Template.signup.events({
	'click .signUp': function(e) {
		var first = $('#first_name').val();
		var last = $('#last_name').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();
		var isAdmin = $('#admin').is(":checked");
		if (!isAdmin) {
			var adminEmail = $('#adminEmail').val();
		}

		if (!first) {
			Materialize.toast("You need to enter a first name", 2000);
			return;
		} else if (!last) {
			Materialize.toast("You need to enter a last name", 2000);
			return;
		} else if (!email) {
			Materialize.toast("You need to enter an email", 2000);
			return;
		} else if (!password) {
			Materialize.toast("You need to enter a password", 2000);
			return;
		} else if (!confirm) {
			Materialize.toast("You need to confirm your password", 2000);
			return;
		} else if (password != confirm) {
			Materialize.toast("Your passwords don't match", 2000);
			return;
		}

		var files = $('input[type="file"]').prop("files");
		console.log(files[0]);

		var fileId = Images.insert(files[0], function(err, fileObj) {
			if (err) {
				console.log(err);
			} else {
				if (isAdmin) {
					Accounts.createUser({
						username: first + last,
						email: email,
						password: password,
						profile: {
							first: first,
							last: last,
							role: 'admin',
							imageId: fileObj._id
						}
					});
				} else if (!isAdmin) {
					Accounts.createUser({
						username: first + last,
						email: email,
						password: password,
						profile: {
							first: first,
							last: last,
							role: 'user',
							adminEmail: adminEmail,
							imageId: fileObj._id
						}
					});
				} else {
					Materialize.toast('error', 2000)
				}
			};
		});

		Router.go('/dashboard')
	},
	'change #admin': function(e) {
		Session.set('admin', e.target.checked);
	}
});

Template.signup.helpers({
	'isAdmin': function() {
		return Session.get('admin');
	}
});

Template.signup.onRendered = function() {
	Session.set('admin', true);
}