/* exported includesSeven */
function includesSeven(array) {
  var arr = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      arr = true;
    }
  }
  return arr;
}
