var $tabContainer = document.querySelector('.tab-container');
var $tabAll = document.querySelectorAll('.tab');
var $viewAll = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', matchTab);

function matchTab(event) {

  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tabAll.length; i++) {
    if ($tabAll[i] === event.target) {
      $tabAll[i].className = 'tab ' + 'active';
    } else {
      $tabAll[i].className = 'tab';
    }
  }
  var $dataViewValue = event.target.getAttribute('data-view');
  for (i = 0; i < $viewAll.length; i++) {
    if ($viewAll[i].getAttribute('data-view') !== $dataViewValue) {
      $viewAll[i].className = 'view ' + 'hidden';
    } else {
      $viewAll[i].className = 'view';
    }
  }
}
