function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log(convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
console.log(greet('mike ayala'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log(getArea(345, 542));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log(getFirstName({ firstName: 'Mac', lastName: 'andCheese' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
