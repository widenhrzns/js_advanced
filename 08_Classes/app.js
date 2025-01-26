"use strict";

class Car {
  #vin = 6;
  speed;

  constructor() {
    // delete this.#vin // не сможем
    this.#test2 = 5;
  }

  #changeVin() {
    console.log("changed");
  }

  test() {
    // проверка
    this.#changeVin();
  }

  static #field = 3;

  static {
    this.#field = 5;
  }
}

const car = new Car();
car.test();
