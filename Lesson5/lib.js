var start = (function () {

  var random = Math.round(Math.random() * 1000);
  var input = 0;
  var count = 10;

  function check(input) {
    return !input || isNaN(input);
  }

  function compare(input, random) {
    if (random < input) {
      alert('Это число меньше. Осталось попыток: ' + count);
      return false;
    } else if (random > input) {
      alert('Это число больше. Осталось попыток: ' + count);
      return false;
    } else {
      alert('Вы угадали! Количество попыток: ' + (10 - count));
      return true;
    }
  }

  return function () {
    while (input != null) {
      input = prompt('Угадайте число от 1 до 1000: ');
      if (input == null) {
        alert('Игра окончена.');
        break;
      }
      count--;
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