"use strict";

const Book = function (title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
};

Book.prototype.read = function () {
  this.isRead = true;
};

/* e6 classes */
class BookClass {
  isRead = false;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  read() {
    this.isRead = true;
  }
}

const lotr = new BookClass("lotr", "Tolkien");
console.log(lotr);
console.log(lotr.__proto__);
console.log(lotr instanceof BookClass);
