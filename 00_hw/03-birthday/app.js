"use strict";

function validateAge(birthdayDate) {
  const now = new Date();
  const userBirthday = new Date(birthdayDate);
  const age =
    new Date(now - userBirthday).getFullYear() - new Date(0).getFullYear();
  return { age, result: age >= 14 };
}

console.log(validateAge("2006-03-12"));

// Checker

// function randomizer(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function roller(times) {
//   const results = [];
//   for (let i = 1; i <= times; i++) {
//     const year = randomizer(1900, 2020);
//     const month = randomizer(1, 12);
//     const day = randomizer(1, 31);
//     const randomDate = `${year}-${month}-${day}`;
//     results.push({ id: i, ...validateAge(randomDate) });
//   }
//   return results;
// }

// console.log(roller(100));
