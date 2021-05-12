var six = 6;
var nine = 9;
var eleven = 11;
var maximumValue = Math.max(six, nine, eleven);

console.log('the value of maximumValue:', maximumValue);

var heros = ['kick-ass', 'spider-man', 'deadpool', 'wolverine'];
var randomNumber = Math.random();

randomNumber = randomNumber * heros.length;

var randomIndex = Math.floor(randomNumber);

console.log(randomIndex);

var randomHero = heros[randomIndex];

console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'harry Potter and the Sorcerers Stone',
    author: 'J.K. Rowling'
  },
  {
    title: 'Captain-UnderPants',
    author: 'Dav Pickley'
  },
  {
    title: 'My Side of the Mountain',
    author: 'jean Craighead George'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(library, 1);
console.log('value of library', library);

var fullName = 'Mike Ayala';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
