// Create a function for the addEventListener
// inside the function event.key needs to match the letter on the screen
//
var $letterList = document.querySelectorAll('span');
window.addEventListener('keydown', keyDown);
var spanPhrase = 'grumpy wizards make toxic brew';
var letterIndex = 0;
function keyDown(event) {
  if (event.key === spanPhrase[letterIndex]) {
    $letterList[letterIndex].className = 'green';
    $letterList[letterIndex + 1].className = 'underline';
    letterIndex++;
  } else {
    $letterList[letterIndex].className = 'red';
  }
}
