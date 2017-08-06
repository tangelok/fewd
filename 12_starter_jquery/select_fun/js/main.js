/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.
// 2. Go to style.css and add a class called crazy. Style that class with your choice of text color.

// 3. When #box2 is clicked on
$('#box2').on('click', function (){
  $('.box').addClass('fun');
  $('h1').addClass('crazy');
  $('#box3').slideToggle(350);
});
	// a) Add the fun class to all the elements with the class .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3

$('.box').on('click', function (){
  $('h1').text('jQueryNinja');
});
// 4. When any .box is clicked
	// a) Change the text in the header's h1 tag to read "jQuery Ninja"


/**
*
* Part 2:
*
*/
$('#dropdownMenu').hide();
// 6. Hide the item with the id #dropdownMenu

$('#dropdownButton').on('click', function (){
  $('#dropdownMenu').slideToggle(350);
});
// 7. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu



/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2 (No event here!)
$('#answer2').hide();

// 9. When #question2 is clicked:
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2
$('#question2').on('click', function (){
  $('#answer2').slideDown(350);
  $('#answer1').slideUp(600);
  $('li').removeClass('active');
  $('#question2').addClass('active');


});

// 10. When #question1 is clicked:
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1
$('#question1').on('click', function(){
  $('#answer1').slideDown(300);
  $('#answer2').slideUp(350);
  $('li').removeClass('active');
  $('#question1').addClass('active');
});



/**
*
* Part 4:
*
*/

// For this last one, the steps aren't broken down for you line-by-line. See if you can figure these out!


// 1. When the button "Show Only Yellow" is clicked, only show circles with the class .yellow
$('#showYellowCircles').on('click', function (){
  $('.blue').hide(350);
  $('.yellow').show(350);
});

// 2. When the button "Show Only Blue" is clicked, only show circles with the class .blue
$('#showBlueCircles').on('click', function (){
  $('.yellow').hide(350);
  $('.blue').show(350);
});
