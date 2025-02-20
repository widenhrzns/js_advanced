"use strict";

import { add, sub } from "./calc.js";

const a = 2;

console.log(sub(1, 3));
console.log(add(1, 3));
console.log(a);

/*
  rollup app.js --file bundle.js --format iife
  rollup app.js --file bundle.js --format cjs 
  rollup app.js --file bundle.js --format umd --name "myBundle" 
*/
