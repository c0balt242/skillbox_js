"use strict";

var User = function(firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
};

var UserList = function() {
  this.users = [];

  this.add = function() {
    this.users.push(user);
  };

  this.show = function() {
    for (var i = 0; i <= this.users.length; i++) {
      document.write(this.users[i].firstName + ' ' + this.users[i].lastName + ' ' + this.users[i].regDate + '<br>');
    }
  };
};

var date = new Date();
var list = new UserList();

var user = new User("Anatoliy", "Ivanov", date.toString());
list.add(user);
var user = new User("Petya", "Kakashkin", date.toString());
list.add(user);
var user = new User('Vasya', 'Zalupkin', date.toString());
list.add(user);
console.log(list.show());
