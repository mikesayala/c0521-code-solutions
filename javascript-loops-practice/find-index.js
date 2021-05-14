/* exported findIndex */
function findIndex(array, value) {
  var val = -1;
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return val;
}
