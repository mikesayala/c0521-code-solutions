// click open modal and enable pop up
// click NO and close the pop up
// need to create an if statement
// When i click the blue button it should toggle the container to go black and
// pop up to show up
// when i click NO it should close the pop up.
var $display = document.querySelector('.pop-up');
var $gradient = document.querySelector('.gradient');
var $modalContainer = document.querySelector('.modal');
var $survey = document.querySelector('.survey');
var $popUp = document.querySelector('.pop-up');
var $openModal = document.querySelector('.open');
$openModal.addEventListener('click', blueButton);
$survey.addEventListener('click', noButton);

function blueButton(event) {
  var $blueButton;
  $blueButton = 'on';

  $popUp.className = 'pop-up ' + $blueButton;
  $openModal.className = 'open ' + $blueButton;
  $gradient.className = 'gradient ' + $blueButton;
}

function noButton(event) {
  var redButton;
  redButton = 'off';

  $modalContainer.className = 'modal ' + redButton;
  $display.className = 'pop-up ' + redButton;
  $gradient.className = 'gradient ' + redButton;
}
