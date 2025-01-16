"use strict";

function validateAge(birthdayDate) {
  const now = new Date();
  const userBirthday = new Date(birthdayDate);
  const age =
    new Date(now - userBirthday).getFullYear() - new Date(0).getFullYear();
  return age >= 14;
}

console.log(validateAge("2006-03-12"));
