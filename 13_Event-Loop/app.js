"use strict";

const prom = new Promise((resolve, reject) => {
  if (new Date() < new Date("02/12/2025")) {
    reject(new Error("Error"));
  }
  resolve("Success");
});

prom.then((data) => console.log(data)).catch((error) => console.log(error));

function timeout(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
}

timeout(1)
  .then(() => {
    console.log(1);
    return timeout(1);
  })
  .then(() => console.log(2));
