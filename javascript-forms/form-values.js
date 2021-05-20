var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  var form = {
    name: $contactForm.name.value,
    email: $contactForm.email.value,
    Message: $contactForm.message.value
  };

  console.log('value of form:', form);

  $contactForm.reset();
}
