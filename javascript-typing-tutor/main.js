// Create a function for the addEventListener
// inside the function
var $span = document.querySelectorAll('.span');
for (var span of $span) { span.addEventListener('keydown', keyDown); }
var words = (Array.from('grumpywizardsmaketoxicbrew '));
var i;
function keyDown(event) {
  if (words[i] === event.target.key) {
    span.className = 'span ' + 'green';
  }
}
