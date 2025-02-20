"use strict";

import { add, sub } from "./calc.js";

// console.log("second");

console.log(sub(1, 3));

setInterval(() => {
  console.log(add(1, 3));
}, 1000);
