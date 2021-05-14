/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var concatenate = [];
  for (var i = 0; i < words.length; i++) {
    concatenate.push(words[i] + suffix);
  }
  return concatenate;
}
