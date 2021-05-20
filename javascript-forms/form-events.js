function handleFocus(event) {
  console.log('value of:', 'focus');
  console.log('value of:', event.target.name);
  console.log(event.target.value);
}

function handleBlur(event) {
  console.log('blur');
  console.log(event.target.name);
  console.log(event.target.value);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleFocus);
$userName.addEventListener('input', handleFocus);

$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('input', handleInput);
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
