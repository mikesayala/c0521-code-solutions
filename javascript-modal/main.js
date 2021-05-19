// click open modal and enable pop up
// click NO and close the pop up
// need to create an if statement
// When i click the blue button it should toggle the container to go black and
// pop up to show up
// when i click NO it should close the pop up.

// var popUp = false;
// function SurveySurprise(event) {
//   var $survey;
//   if (popUp === true) {
//     popUp = false;
//     $survey = 'on';
//   } else {
//     popUp = true;
//     $survey = 'off';
//   }
//   $container.className = 'container ' + $survey;
// }

// $popUp.addEventListener('click', SurveySurprise);

var openMo = false;
function blueButton(event) {
  var $blueButton;
  if (openMo === true) {
    openMo = false;
    $blueButton = 'off';
  } else {
    openMo = true;
    $blueButton = 'on';
  }
  $popUp.className = 'pop-up ' + $blueButton;
  $container.className = 'container ' + $blueButton;
  $openModal.className = 'open ' + $blueButton;
}

var $popUp = document.querySelector('.pop-up');
var $container = document.querySelector('.container');
var $openModal = document.querySelector('.open');
$openModal.addEventListener('click', blueButton);

// var $survey = document.querySelector('.survey');
