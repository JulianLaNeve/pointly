Template.adminDashboard.rendered = function() {
	$('ul.tabs').tabs();
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
	$('.tooltipped').tooltip({delay: 50});
	$('.modal-trigger').leanModal();
}

Template.adminDashboard.events({
	'click .addTask': function(e) {
		var name = $('#name').val();
		var desc = $('#desc').val();
		var points = $('#points').val();
		

	},
	'click .user': function(e) {
		Session.set('viewing', e.target.id);
	}
})

Template.adminDashboard.helpers({
	'users': function() {
		var email = Meteor.user().profile.email;
		return Meteor.users.find({"profile.adminEmail": email});
	},
	'confirm': function() {
		return Lists.find({owner: Session.get('viewing')}).fetch()[0].lists;
	}
})