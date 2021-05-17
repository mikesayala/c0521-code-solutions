/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word[0] !== 'j' && word[0] !== 'J') {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  } else {
    return word[0].toUpperCase() + word.slice(1, 4).toLowerCase() + word.slice(4, 5).toUpperCase() + word.slice(5).toLowerCase();
  }
}
