"use strict";

const availableDices = ["d4", "d6", "d8", "d10", "d12", "d16", "d20"];

function diceRoller(type) {
  const isCorrect = availableDices.some((dice) => dice === type);
  if (!isCorrect) {
    return "Dice is not supported";
  }
  const randomNum = Math.random();
  const ceil = Number(type.replace("d", ""));
  return Math.floor(randomNum * ceil + 1);
}

console.log(diceRoller("d6"));
console.log(diceRoller("v6"));
