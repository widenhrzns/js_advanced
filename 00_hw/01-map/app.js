"use strict";

const arrayOfObjects = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
];

const uniqueArrayOfObjects = new Set(
  arrayOfObjects.map((obj) => arrayOfObjects.find((el) => el.id === obj.id))
);

console.log(uniqueArrayOfObjects);
