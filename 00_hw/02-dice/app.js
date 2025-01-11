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

// Checker

/*
const dataDices = [
  { type: "d4", max: 4 },
  { type: "d6", max: 6 },
  { type: "d8", max: 8 },
  { type: "d10", max: 10 },
  { type: "d12", max: 12 },
  { type: "d16", max: 16 },
  { type: "d20", max: 20 },
];

function roller(times) {
  const results = [];
  for (let i = 0; i < times; i++) {
    const randomDice = Math.floor(Math.random() * (6 - 0 + 1) + 0);
    const input = availableDices[randomDice];
    const result = diceRoller(input);
    results.push({ input, result });
  }
  console.log(results);
  return results;
}

function checker(times) {
  const results = roller(times);
  const troubles = results.find(
    (roll) =>
      roll.result > dataDices.find((dice) => dice.type === roll.input).max
  );
  if (!troubles) {
    return `Everything is OK!`;
  }
  return troubles;
}

console.log(checker(100));
*/
