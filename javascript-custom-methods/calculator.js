/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    for (var i = 0; i < numbers.length; i++) {
      var sum = numbers.reduce(function (x, y) {
        return x + y;
      }, 0);
    }
    return sum;
  },
  getAverage: function (numbers) {
    var arrverage = 0;
    for (var i = 0; i < numbers.length; i++) {
      arrverage += numbers[i];
    }
    return arrverage / numbers.length;
  }
};
