// Show sideNav
$('.button-collapse').sideNav('show');
// Hide sideNav
$('.button-collapse').sideNav('hide');

// SideNav Options
$('.button-collapse').sideNav({
edge: 'right', // Choose the horizontal origin
closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});