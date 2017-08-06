// Write your pseudo code here! HAPPY CODING! :)
$('.hamburger').on('click', function (){
  $('.sidebar').toggleClass('active');
});
// When the user clicks the x (.close)
  // Remove the active class from the .sidebar
$('.close').on('click', function(){
  $('.sidebar').removeClass('active');
});


  //Toggle the .active class on the .sidebar when the hamburger icon is clicked.
