/* exported filterOutStrings */
function filterOutStrings(values) {
  var value = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) === 'number') {
      value.push(values[i]);
    }
  } return value;
}
