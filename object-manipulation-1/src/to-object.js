/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  var key = keyValuePair[0];
  for (var i = 0; i < keyValuePair.length; i++) {
    obj[key] = keyValuePair[i];
  }
  return obj;
}
