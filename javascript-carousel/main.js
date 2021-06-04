// every circle icon has a picture associated with it.
// if i click on the icon it'll switch to the picture.
// every 3 seconds the picture changes.
// If i click the arrows it can go either to the picture before or after the
// current picture.
// if i click on the arrow every other pictures needs to be hidden except the current picture
// the arrows need to do the same
// if i click left it should show jigglypuff and hide everyone else and change the dot to fas instead of far
// need to

var $arrow = document.querySelectorAll('.arrow');
var $img = document.querySelector('img');
window.addEventListener('click', arrowSwitch);

function arrowSwitch(event) {
  for (var i = 0; i < $arrow.length; i++) {
    if ($arrow[i] === event.target) {
      $img.classList.toggle('hidden');
    } else {
      $img.classList.toggle('view');
    }
  }
}
