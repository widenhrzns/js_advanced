"use strict";

class Character {
  #inventory = [];
  #health = 10;

  pickItem(item) {
    this.#inventory.push(item);
  }

  receiveDamage(damage) {
    this.#health -= damage;
  }
}

class DB {
  save(item) {
    localStorage.satItem("char", item);
  }

  loaCharacter() {
    // ...
  }
}
