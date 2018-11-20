"use strict";

var User = function (firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
};

var UserList = function(User) {
  this.users = [];
  
  this.add = function() {
    this.users.push(user);
  }
  
  this.show = function() {
    return this.users;
  }
}

var date = new Date();
var list = new UserList();

var user = new User('Anatoliy', 'Ivanov', date.toString());
list.add(user);
var user = new User('Petya', 'Kakashkin', date.toString());
list.add(user);
console.log(list.show());

