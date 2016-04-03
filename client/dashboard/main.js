Template.dashboard.helpers({
	'admin': function() {
		return true;
	},
	'user': function() {
		return true;
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