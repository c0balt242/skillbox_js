// "use strict";

var User = function (firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
};

// var UserList = function(user) {
//   var users = [];
//   var addUser = function(user) {
//     users.push(user);
//   };
//   var getAllUsers = function() {
//     return users;
//   };
// };

function createUser(input) {
  var u = input;
  return u;
}

var date = new Date();

var users = [];

var user = new User('Anatoliy', 'Ivanov', date.toString());
users.push(user);
var user = new User('Vasya', 'Petrov', date.toString());
users.push(user);
var user = new User('Gena', 'Kakashkin', date.toString());
users.push(user);
console.log(user);
console.log(users);