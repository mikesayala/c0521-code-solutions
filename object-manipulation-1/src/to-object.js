/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  var keys = keyValuePair[0];
  for (var i = 0; i < keyValuePair.length; i++) {
    obj[keys] = keyValuePair[i];
  }
  return obj;
}
