Template.userDashboard.rendered = function() {
	$('ul.tabs').tabs();
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
}