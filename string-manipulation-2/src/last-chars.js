/* exported lastChars */
function lastChars(length, string) {
  var myStr = '';
  for (var i = string.length; i > 0; i--) {
    if (i > length - 1) {
      myStr = myStr + string[i];
    }
  }
  return myStr;
}
