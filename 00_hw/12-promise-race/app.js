"use strict";

async function getProduct(id) {
  try {
    const response = await fetch("https://dummyjson.com/products/" + id);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (error) {
    console.warn(error);
  }
}

async function customRace(promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      Promise.resolve(promise).then(
        (data) => resolve(data),
        (error) => reject(error)
      );
    });
  });
}

(async () => {
  const result = await customRace([
    getProduct(1),
    getProduct(2),
    getProduct(3),
    getProduct("a"),
  ]);
  console.log(result);
})();
