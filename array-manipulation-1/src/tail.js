/* exported tail */
// input- array
// output - new array containing all elements after the first
// need to go through the array
// take out the first element of the array
// write the rest of the elements in the array in a new array
// return the array

function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
