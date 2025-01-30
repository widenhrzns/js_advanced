"use strict";

class Billing {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  calculateTotal() {
    return this.#amount;
  }
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal() {
    return super.calculateTotal();
  }
}

class HourBilling extends Billing {
  #amountOfHours;

  constructor(amount, amountOfHours) {
    super(amount);
    this.#amountOfHours = amountOfHours;
  }

  calculateTotal() {
    return super.calculateTotal() * this.#amountOfHours;
  }
}

class ItemBilling extends Billing {
  #amountOfItems;

  constructor(amount, amountOfItems) {
    super(amount);
    this.#amountOfItems = amountOfItems;
  }

  calculateTotal() {
    return super.calculateTotal() * this.#amountOfItems;
  }
}

const billing = new Billing(100);
console.log(billing.calculateTotal());

const fixBilling = new FixBilling(100);
console.log(fixBilling.calculateTotal());

const hourBilling = new HourBilling(100, 2);
console.log(hourBilling.calculateTotal());

const itemBilling = new ItemBilling(100, 3);
console.log(itemBilling.calculateTotal());
