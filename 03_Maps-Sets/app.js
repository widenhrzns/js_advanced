"use string";

const weatherMap = new Map();
weatherMap.set("London", "10").set("Moscow", "7"); // наполнение map (можно чейнить тк возвращает map)

console.log(weatherMap);

console.log(weatherMap.get("Moscow"));
console.log(weatherMap.get("not found"));

console.log(weatherMap.has("Moscow"));
console.log(weatherMap.has("not found"));

weatherMap.delete("London"); // нельзя чейнить тк возвращает не map а true/false
console.log(weatherMap);

// weatherMap.clear();
// console.log(weatherMap);

const array = [1, 2, 3];

weatherMap
  .set(1, 5)
  .set(true, "yes")
  .set(false, "no")
  .set(array, "array")
  .set({ a: 1 }, { b: 1 });
console.log(weatherMap);

console.log(weatherMap.size);

console.log(weatherMap.get(array));
console.log(weatherMap.get({ a: 1 }));
