"use strict";

/* const Book = function (title, author) {
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
console.log(book instanceof Book); */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  buy() {
    console.log("buy");
  }
}

class AudioBook extends Book {
  constructor(title, author, lenMin) {
    super(title, author); //метод вызывающий конструктор исходного класса
    this.lenMin = lenMin;
  }

  log() {
    console.log(`${this.title} - ${this.lenMin}`);
  }
}

const book = new AudioBook("ewkfow", "Prrr", 120);
console.log(book);
book.log();
book.buy();
