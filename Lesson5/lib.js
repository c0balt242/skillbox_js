var start = (function () {
  // debugger;
  var random = Math.round(Math.random() * 10);
  var input = 0;
  var count = 10;

  function check(input) {
    return !input || isNaN(input);
  }

  // function check(input) {
  //   if (typeof input === 'string' || typeof input === boolean || typeof input === undefined || typeof input === NaN) {
  //     return true;
  //   }
  // }

  function compare(input, random) {
    if (input < random) {
      alert('Это число меньше. Осталось попыток: ' + count);
      return false;
    } else if (input > random) {
      alert('Это число больше. Осталось попыток: ' + count);
      return false;
    } else {
      alert('Вы угадали за ' + (10 - count) + ' попыток!');
      return true;
    }
  }

  return function () {
<<<<<<< HEAD
    while (input != null) {
=======
    do {
>>>>>>> a2b52e8f480f71a0a7721b2718cceb1c8d51e820
      input = prompt('Угадайте число от 1 до 10: ');
      if (input == null) {
        alert('Игра окончена.');
        break;
      }
      count--;
      console.log('осталось попыток: ' + count + ' (' + random + ')');
      if (count === 0) {
        alert('Попытки закончились');
        break;
      } else if (check(input)) {
        alert('Это не число!');
      } else if (compare(input, random)) {
        break;
      }
    }
  };
})();