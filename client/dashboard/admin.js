Template.adminDashboard.rendered = function() {
	$('ul.tabs').tabs();
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
	$('.tooltipped').tooltip({delay: 50});
	$('.modal-trigger').leanModal();
}