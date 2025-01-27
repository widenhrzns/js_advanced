"use strict";

class Car {
  #brand;
  #model;
  #_mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  set #mileage(mileage) {
    this.#_mileage = mileage;
  }

  get #mileage() {
    return this.#_mileage;
  }

  changeMileage(newMileage) {
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

  info() {
    console.log(
      `Brand: ${this.#brand} \nModel: ${this.#model} \nMileage: ${
        this.#_mileage
      }`
    );
  }
}

const car1 = new Car("bwm", "m3", 13);
car1.changeMileage(13);
car1.changeMileage(10);
car1.changeMileage(15);
car1.info();
console.log(car1);

const car2 = new Car("audi", "q3");
car2.info();
car2.changeMileage(10);
car2.info();
