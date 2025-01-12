"use strict";

// const first = new Date(2024, 10, 4);
// const second = new Date(2024, 10, 3);

// console.log(first > second);
// console.log(first.getTime() > second.getTime());

const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 4);

console.log(first == second); // неравны тк сравниваются не значения а ссылки на объекты
console.log(first === second);
console.log(first.getTime() === second.getTime());
console.log(Number(first) === Number(second));
