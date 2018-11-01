var start = (function () {
  // debugger;
  var random = Math.round(Math.random() * 10);
  var input = 0;
  var count = 10;
<<<<<<< HEAD

  function check(input) {
    return !input || isNaN(input);
  }

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
=======
>>>>>>> e6b6aa25a9b575edfe7074d7c513871c8d3eeed4

  return function () {
    var flag = true;
    do {
<<<<<<< HEAD
      input = prompt('Угадайте число от 1 до 10: ');
      count--;
      console.log('осталось попыток: ' + count + ' (' + random + ')');
      if (count === 0) {
        alert('Попытки закончились');
        return input = null;
      } else if (check(input)) {
        alert('Это не число!');
      } else if (compare(input, random)) {
        break;
=======
      input = prompt('Enter number: ');
      count--;
      console.log('осталось попыток: ' + count);
      if (count === 0) {
        return input = null;
>>>>>>> e6b6aa25a9b575edfe7074d7c513871c8d3eeed4
      }
    } while (input != null);
  }
})();