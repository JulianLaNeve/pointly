Template.dashboard.helpers({
	'admin': function() {
		return Meteor.user().profile.role == 'admin';
	},
	'user': function() {
		return Meteor.user().profile.role == 'user';
	}
})

Template.adminDashboard.helpers({
	'name': function() {
		return Meteor.user().profile.first + " " + Meteor.user().profile.last;
	},	

	'proPic': function() {
		return Images.findOne(Meteor.user().profile.imageId).url();
	}
})