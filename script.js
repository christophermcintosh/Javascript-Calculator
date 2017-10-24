$(document).ready(function() {
 
var value = '';

// Records user input  
$('.prop').click(function() {
  value += $(this).text();
  $('.equation').val(value);
 });
  
// Calculate the math when button is pressed
$('.doTheMath').click(function() {
  var answer = eval(value);
  $('.equation').val(answer);
  value = '';
});

// Clears the input field  
$('.clear').click(function() {
  value = '';
  $('.equation').val('');
});

  
// Deletes user's last input   
$('.delete').click(function() {
  value = value.slice(0, -1);
  $('.equation').val(value); 
});
  
});

