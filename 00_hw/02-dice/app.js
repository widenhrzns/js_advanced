"use strict";

function diceRoller(type) {
  const isCorrect = type[0] === "d";
  if (!isCorrect) {
    return "Dice is not supported";
  }
  const randomNum = Math.random();
  const ceil = Number(type.replace("d", ""));
  return Math.floor(randomNum * ceil + 1);
}

console.log(diceRoller("d6"));
console.log(diceRoller("v6"));
