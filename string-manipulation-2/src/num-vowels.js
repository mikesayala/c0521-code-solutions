/* exported numVowels */
function numVowels(string) {
  var vowels = 'aAeEiIoOuU';
  var stringArray = string.toLowerCase().split('');
  var amountOfVowels = 0;

  for (var i = 0; i < stringArray.length; i++) {
    for (var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
      if (stringArray[i] === vowels[vowelIndex]) {
        amountOfVowels += 1;
      }
    }
  }
  return amountOfVowels;
}
