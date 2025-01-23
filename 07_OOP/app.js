"use strict";

const User = function (email, password) {
  this.email = email;
  this.password = password + "%%%";
};

const user1 = new User("a@a.ru", "123");
console.log(user1);
const user2 = new User("abc@a.ru", "321");
console.log(user2);

// Создается пустой объект
// Вызывается User функция
// this = пустому объекту
// Объект связывается с prototype
// Возвращается объект

console.log(user2 instanceof User); // user2 является инстансом User
