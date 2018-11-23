// "use strict";
// debugger

var User = function (firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
};

var UserList = function () {
  this.users = [];

  this.add = function (user) {
    this.users.push(user);
    console.log('adding user ' + user.firstName);
  };

  this.show = function () {
    for (var i = 0; i < this.users.length; i++) {
      console.log(this.users[i].firstName + " " + this.users[i].lastName + " " + this.users[i].regDate);
    }
  };
};

function isNull(input) {
  return input === null;
}

var date = new Date();
var list = new UserList();

function addUser() {
  var input = prompt("Enter first and last name: ");
  var str = input.split(" ", 2);
  var user = new User(str[0], str[1], date.toLocaleString());
  list.add(user);
}

addUser();
addUser();
addUser();

list.show();

// console.log(list.show());
