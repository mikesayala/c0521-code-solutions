/* exported getWords */
function getWords(string) {
  var array = [];
  for (var i = 0; i < string.length; i++) {
    if (string.length > 0) {
      return string.split(' ');
    }
  }
  return array;
}
