/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  var keys = keyValuePair[0];
  obj[keys] = keyValuePair[1];
  return obj;
}
