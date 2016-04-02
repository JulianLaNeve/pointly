Template.signup.events({
	'click .signUp': function(e) {
		var first = $('#first_name').val();
		var last = $('#last_name').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();
	}
})