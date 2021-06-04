// every circle icon has a picture associated with it.
// if i click on the icon it'll switch to the picture.
// every 3 seconds the picture changes.
// If i click the arrows it can go either to the picture before or after the
// current picture.
// if i click on the arrow every other pictures needs to be hidden except the current picture
// the arrows need to do the same
// if i click left it should show jigglypuff and hide everyone else and change the dot to fas instead of far
// need to
var $dot = document.querySelectorAll('.margin-circle');
var $arrowRt = document.querySelector('.arrow-right');
var $arrowLt = document.querySelector('.arrow-left');
var $imgAll = document.querySelectorAll('img');
$arrowRt.addEventListener('click', nextImage);
$arrowLt.addEventListener('click', previousImage);
window.addEventListener('click', dotClick);
var counter = 0;

function activate(images, button) {
  images[counter].className = 'view';
  button[counter].className = 'fas fa-circle margin-circle';
}

function deactivate(images, button) {
  images[counter].className = 'hidden';
  button[counter].className = 'far fa-circle margin-circle';
}

function dotClick(event) {
  deactivate($imgAll, $dot);
  var dataIndex = event.target.getAttribute('data-index');
  if (dataIndex !== null) {
    counter = dataIndex - 1;
  }
  activate($imgAll, $dot);
}

function nextImage() {
  deactivate($imgAll, $dot);
  counter = (counter + 1) % $imgAll.length;
  activate($imgAll, $dot);
}

function previousImage() {
  deactivate($imgAll, $dot);
  if (counter === 0) {
    counter = $imgAll.length - 1;
  } else {
    counter = counter - 1;
  }
  activate($imgAll, $dot);
}

setInterval(nextImage, 3000);
