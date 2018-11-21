var start = (function () {

  return function () {
    var count = 10;
    var random = Math.round(Math.random() * 1000);
    var input;

    // function isNull(input) {
    //   return input === null;
    // }
    var isNull = input => input === null;

    // function check(input) {
    //   return !input || isNaN(input);
    // }

    var check = input => !input || isNaN(input);

    function compare(input, random) {
      if (random < input) {
        alert('Загаданное число меньше. Осталось попыток: ' + count);
        return false;
      } else if (random > input) {
        alert('Загаданное число больше. Осталось попыток: ' + count);
        return false;
      } else {
        alert('Вы угадали! Количество попыток: ' + (10 - count));
        return true;
      }
    }

    function restart() {
      var tr = confirm('Попытки закончились. Хотите сыграть ещё раз?');
      if (tr) {
        return start();
      }
    }
    while (!isNull(input)) {
      input = prompt('Угадайте число от 1 до 1000: ');
      if (isNull(input)) {
        alert('Игра окончена.');
        break;
      }
      count--;
      if (count === 0) {
        if (!restart()) {
          break;
        }
      } else if (check(input)) {
        alert('Это не число!');
      } else if (compare(input, random)) {
        break;
      }
    }
  };
})();