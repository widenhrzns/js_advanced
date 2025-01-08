"use strict";

const bigNum1 = 350500000;
const bigNum2 = 350_500_000;
console.log(bigNum1 == bigNum2);

console.log(Number("350_500_000"));
console.log(Number("350500000"));
console.log(Number.parseInt("350_500_000"));
console.log(Number.parseFloat("350_500_000.5"));
