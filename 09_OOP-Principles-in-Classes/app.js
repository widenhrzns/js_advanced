"use strict";

class Wallet {
  balance = 0;

  add(sum) {
    this.balance += sum;
    return this;
  }

  remove(sum) {
    this.balance -= sum;
    return this;
  }
}

const wallet = new Wallet();
const res = wallet.add(100).remove(10);
console.log(res);

///

class Builder {
  house = {};

  addRoof() {
    this.house.roof = true;
    return this;
  }

  addFloor() {
    this.house.floor = true;
    return this;
  }

  execute() {
    return this.house;
  }
}

const res2 = new Builder();
console.log(res2.addFloor().addRoof().execute());
