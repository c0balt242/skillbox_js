var start = (function () {
  // debugger;
  var random = Math.round(Math.random() * 1000);
  var input = 0;
  var count = 0;

  return function () {
    do {
      input = prompt('Enter number: ');
      count++;
      console.log('осталось попыток: ' + count);
      if (count === 10) {
        return input = null
      }
    }
    while (input != null);
  }
})();