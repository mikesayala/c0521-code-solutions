var student = { firstName: 'Mike', lastName: 'Ayala', age: 30 };

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'shift lead';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = { make: 'nissan', model: 'GTR', year: 1999 };
vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = { name: 'saucer', type: 'shiba inu' };
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
