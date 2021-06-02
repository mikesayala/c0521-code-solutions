function ExampleConstructor() {}
console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var exConstruct = new ExampleConstructor();
console.log('value of exConstruct:', exConstruct);

var ampleOr = exConstruct instanceof ExampleConstructor;
console.log('value of ampleOr:', ampleOr);
