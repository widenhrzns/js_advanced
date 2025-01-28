"use strict";

/*
    Сделать класс врага со здоровьем и методом получения урона

    Сделать класс меча, который имее силу и метод нанесения урона 

    Сделать класс орка, который в 50% случаев не получит урон 
*/

class Enemy {
  health;

  constructor(health) {
    this.health = health;
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}

class Sword {
  constructor(damage) {
    this.damage = damage;
  }

  dealDamage(enemy) {
    enemy.takeDamage(this.damage);
  }
}

class Ork extends Enemy {
  miss;

  constructor(health) {
    super(health);
    this.miss = 0.5;
  }

  takeDamage(damage) {
    const random = Math.random();
    if (random > this.miss) {
      this.health -= damage;
    }
  }
}

const enemy = new Enemy(100);
const ork = new Ork(100);
const sword = new Sword(20);

console.log(enemy);
sword.dealDamage(enemy);
console.log(enemy);

console.log(ork);
sword.dealDamage(ork);
console.log(ork);
sword.dealDamage(ork);
console.log(ork);
