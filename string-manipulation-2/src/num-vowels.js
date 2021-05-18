/* exported numVowels */
function numVowels(string) {
  var vowels = 'aAeEiIoOuU';
  var amountOfVowels = 0;
  for (var i = 0; i < String.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      amountOfVowels += 1;
    }
  }
  return amountOfVowels;
}
