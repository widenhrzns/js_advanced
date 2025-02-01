"use strict";

/* char */
class Character {
  race;
  name;
  language;

  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  talk() {
    const line = `[${this.language}] Я - ${this.name}. Остальное не имеет значения для тех, кто встречает меня впервые.`;
    console.log(line);
  }
}

/* orc */
class Orc extends Character {
  weapon;

  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  talk() {
    const orcLine = `[${this.language}] Ррр... У ${this.name} три камня в голове, но ясно: ты — или еда, или еда сбежавшая. Выбирай!`;
    console.log(orcLine);
  }

  hit() {
    const hit = `${this.weapon} ${this.race}-орка летит вперед, пробивая цель с силой разъяренного зверя`;
    console.log(`*${hit}*`);
  }
}

/* elf */
class Elf extends Character {
  spell;

  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell;
  }

  talk() {
    const elfLine = `[${this.language}] Ветер шепчет, что наши дороги пересеклись не случайно. Я - ${this.name} из лесных народов.`;
    console.log(elfLine);
  }

  cast() {
    const cast = `${this.race}-эльф плетет нити магии, и ${this.spell}, словно поток воды из древнего источника, обрушивается на врага`;
    console.log(`*${cast}*`);
  }
}

///
const char = new Character("человек", "Каэль", "ru");
char.talk();
console.log(char);

///
const orc = new Orc("зверь", "Грогар Железный Клык", "ru", "топор");
orc.talk();
orc.hit();
console.log(orc);

///
const elf = new Elf("лесной", "Элисариэль", "ru", "moonbeam");
elf.talk();
elf.cast();
console.log(elf);
