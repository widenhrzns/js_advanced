"use strict";

const User = {
  init(email, password) {
    this.email = email;
    this.password = password;
  },
  log() {
    console.log("log");
  },
};

const user1 = Object.create(User);
console.log(user1);
user1.log();
// user1.email = "a@2.ru";
// user1.password = "123";
user1.init("a@a.ru", "123");
console.log(user1);
console.log(user1.__proto__ === User);

const admin = Object.create(user1);
console.log(user1);
admin.log();
console.log(admin.email);
