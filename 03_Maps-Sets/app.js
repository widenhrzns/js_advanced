"use string";

// Необходимо поменять местами ключи и значения в следующем map
let weatherMap = new Map([
  ["London", 10],
  ["Moscow", 7],
  ["Paris", 14],
]);

// const swappedWeatherMap = new Map();
// for (const [key, value] of weatherMap) {
//   swappedWeatherMap.set(value, key);
// }
// console.log(swappedWeatherMap);

weatherMap = new Map([...weatherMap].map((el) => el.reverse()));
console.log(weatherMap);
