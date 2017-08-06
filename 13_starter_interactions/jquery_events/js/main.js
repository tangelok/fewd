// DOCUMENT EVENTS ==================================================
// When the browser window is resized (Hint: the selector is provided here)
$(window).on('scroll', function () {
  // Add the .party class to the body
  $('body').addClass('party');
});




// MOUSE EVENTS ==========================================
// WHEN the user clicks the anchor
$('a').on('click', function(event) {
  event.preventDefault();
  $('.answer').fadeIn(350);
  // Prevent the default action so the page won't reload
  // Fade in .answer slowly

});

// When the user clicks the hamburger icon (.hamburger)
  // Add the active class that translateX(positive pixels) to .sidebar
$('.hamburger').on('click', function (){
  $('.sidebar').addClass('active');
});
// When the user clicks the x (.close)
  // Remove the active class from the .sidebar
$('.close').on('click', function(){
  $('.sidebar').removeClass('active');
});

$('.hamburger').on('click', function(){
  $('.sidebar').toggleClass('active');
});
  //Toggle the .active class on the .sidebar when the hamburger icon is clicked.
