"use strict";

const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

Book.prototype.buy = function () {
  console.log("buy");
};

const AudioBook = function (title, author, lenMin) {
  Book.call(this, title, author);
  this.lenMin = lenMin;
};
AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;

AudioBook.prototype.log = function () {
  console.log(`${this.title} - ${this.lenMin}`);
};

const book = new AudioBook("ewfje", "Prrr", 120);
book.log();
book.buy();
console.log(AudioBook.prototype.constructor);

console.log(book instanceof AudioBook);
console.log(book instanceof Book);
