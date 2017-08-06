// When the user scrolls in the window
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	// Find out how far they've scrolled
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);
	 if (distanceScrolled>=540) {
		 $('.main-nav').addClass('scrolled');
	 } else {
		 $('.main-nav').removeClass('scrolled');
	 }
	// If the user has scrolled more than 541 pixels
		// Add a class to .main-nav that sets its position to fixed
	// Else
		// Remove the class from .main-nav

});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=500) {
	 $('.label-1').fadeIn(350);
 } else {
	 $('.label-1').fadeOut(350);
 }

});
