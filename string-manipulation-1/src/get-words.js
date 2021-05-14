/* exported getWords */
function getWords(string) {
  var array = [];
  if (string.length > 0) {
    return string.split(' ');
  } else {
    return array;
  }
}
