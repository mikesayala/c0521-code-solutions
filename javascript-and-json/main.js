var books = [
  {
    isbn: '9780590846271',
    title: 'Captain Underpants',
    author: 'Dav Pilkey'
  },
  {
    isbn: '9780545027274',
    title: 'Captain Underpants and the Attack of the Talking Toilets',
    author: 'Dav pilkey'
  },
  {
    isbn: '9780439997102',
    title: 'Captain Underpants and the Invasion of the Incredibly Naughty Cafeteria Ladies from Outer Space',
    author: 'Dav pilkey'
  }
];
console.log('value of books:', books);
console.log('typeof:', typeof books);

console.log('value of JSON:', JSON.stringify(books));
console.log('typeof:', typeof JSON.stringify(books));

var jsonString = '{"id": 1, "name":"Bob" }';
console.log('value of JSON:', jsonString);
console.log('typeof:', typeof jsonString);

console.log('value of JSON.parse:', JSON.parse(jsonString));
console.log('value of typeof:', typeof JSON.parse(jsonString));
