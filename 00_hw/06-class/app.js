"use strict";

class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage = 0) {
    this.#brand = brand;
    this.#model = model;
    this.mileage = mileage;
  }

  set mileage(newMileage) {
    if (this.#mileage === newMileage) {
      console.log(`mileage is equal to the original - no changes made`);
      return false;
    }
    if (this.#mileage > newMileage) {
      console.log(`you can not reduce the mileage - no changes made`);
      return false;
    }
    this.#mileage = newMileage;
    return true;
  }

  get mileage() {
    return this.#mileage;
  }

  info() {
    console.log(
      `Brand: ${this.#brand} \nModel: ${this.#model} \nMileage: ${
        this.#mileage
      }`
    );
  }
}

const car1 = new Car("bwm", "m3", 13);
car1.mileage = 13;
car1.mileage = 10;
car1.mileage = 15;
car1.info();
console.log(car1);

const car2 = new Car("audi", "q3");
car2.mileage = 10;
car2.info();
