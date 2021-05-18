// need to turn button off
// change the color of the background to button lightmode-off
// need to dom query selector the button
// set up a function when my button is clicked
// use modulus to determine when the button will be on or off.
// create an addEventListener to listen for the clicks.

var clicks = 0;
function buttonOff(event) {
  clicks++;
  var toggle;
  if (clicks % 2 === 0) {
    toggle = 'on';
  } else {
    toggle = 'off';
  }
  $buttonActive.className = 'button ' + toggle;
  $bodyActive.className = 'light-mode ' + toggle;
}
var $bodyActive = document.querySelector('.light-mode');
var $buttonActive = document.querySelector('.button');
$buttonActive.addEventListener('click', buttonOff);
