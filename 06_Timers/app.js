"use strict";

const interval = setInterval(() => {
  console.log(new Date());
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);
