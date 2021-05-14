/* exported filterOutNulls */
function filterOutNulls(values) {
  var filterOutNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filterOutNulls.push(values[i]);
    }
  } return filterOutNulls;
}
