"use strict";

/* character */
const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.speak = function () {
  const line = `[${this.language}] Я - ${this.name}. Остальное не имеет значения для тех, кто встречает меня впервые.`;
  console.log(line);
};

/* ork */
const Ork = function (race, name, language, weapon) {
  Character.apply(this, [race, name, language]);
  this.weapon = weapon;
};
Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.hit = function () {
  const hit = `${this.weapon} ${this.race}-орка летит вперед, пробивая цель с силой разъяренного зверя`;
  console.log(`*${hit}*`);
};

/* elf */
const Elf = function (race, name, language, spell) {
  Character.apply(this, [race, name, language]);
  this.spell = spell;
};
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.cast = function () {
  const cast = `${this.race}-эльф плетет нити магии, и ${this.spell}, словно поток воды из древнего источника, обрушивается на врага`;
  console.log(`*${cast}*`);
};

///
const anon = new Character("человек", "Каэль", "ru");
console.log(anon);
anon.speak();

///
const ork = new Ork("зверь", "Грогар Железный Клык", "ru", "топор");
console.log(ork);
ork.speak();
ork.hit();

///
const elf = new Elf("лесной", "Элисариэль", "ru", "moonbeam");
console.log(elf);
elf.speak();
elf.cast();
