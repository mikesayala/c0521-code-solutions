/* exported firstChars */
// Max length print out first 8 characters
// String cat = cat OK
// ex californiaBurrito = californ
// ex nacho = nacho
function firstChars(length, string) {
  var myStr = '';
  var maxLength = length;
  if (string.length < maxLength) {
    maxLength = string.length;
  }
  for (var i = 0; i < maxLength; i++) {
    myStr += string[i];
  }
  return myStr;
}
