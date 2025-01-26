"use strict";

/* 
    Реализовать класс пользователя, со свойствами:
    -логин
    -пароль

    Причем пароль при установке должен переворачиваться и в таком виде храниться.

    Пароль и логин после создания изменять нельзя.

    Также у класса добавить методы:
    -смены пароля(передаем старый и новый)
    -сверки пароля
 */

class User {
  #login;
  #_password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  set #password(password) {
    this.#_password = password.split("").reverse().join("");
  }

  get #password() {
    return this.#_password.split("").reverse().join("");
  }

  get login() {
    return this.#login;
  }

  checkPassword(password) {
    return this.#password === password;
  }

  changePassword(oldPassword, newPassword) {
    if (!this.checkPassword(oldPassword)) {
      return false;
    }
    this.#password = newPassword;
    return true;
  }
}

const user1 = new User("popa", "123456");
console.log(user1);

console.log(user1.login);

console.log(user1.checkPassword("123"));
console.log(user1.checkPassword("123456"));

console.log(user1.changePassword("12345", "123"));
console.log(user1.changePassword("123456", "123"));
console.log(user1);
