/* exported compact */
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      arr.push(array[i]);
    }
  }
  return arr;
}
