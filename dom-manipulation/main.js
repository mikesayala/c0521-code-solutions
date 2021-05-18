var $store = 0;
function clickCounter(event) {
  $store++;
  var temp;
  if ($store < 4) {
    temp = 'cold';
  } else if ($store < 7) {
    temp = 'cool';
  } else if ($store < 10) {
    temp = 'tepid';
  } else if ($store < 13) {
    temp = 'warm';
  } else if ($store < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  $clickCount.textContent = 'clicks: ' + $store;
  $hotButton.className = 'hot-button ' + temp;
}

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
$hotButton.addEventListener('click', clickCounter);
