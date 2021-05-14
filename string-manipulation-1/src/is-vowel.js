/* exported isVowel */
// function isVowel(char) {
//   var vowels = [ ];
//   if (char === vowels) {
//     return true;
//   } else {
//     return false;
//   }
// }
function isVowel(char) {
  var array = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  return array.includes(char);
}
