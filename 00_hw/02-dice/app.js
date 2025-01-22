"use strict";

const availableDices = {
  d4: true,
  d6: true,
  d8: true,
  d10: true,
  d12: true,
  d16: true,
  d20: true,
};

function diceRoller(type) {
  const isCorrect = availableDices[type];
  if (!isCorrect) {
    return "Dice is not supported";
  }
  const randomNum = Math.random();
  const ceil = Number(type.replace("d", ""));
  return Math.floor(randomNum * ceil + 1);
}

console.log(diceRoller("d6"));
console.log(diceRoller("v6"));
