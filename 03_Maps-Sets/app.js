"use string";

const map = new WeakMap();

let a = { a: 1 };
let b = { b: 1 };

map.set(a, "testA").set(b, "testB");

console.log(map.get(a));
console.log(map.has(a));
console.log(map);

a = null;
console.log(map);

//////////////////////////////
let cache = new WeakMap();

function getValue(obj) {
  if (!cache.has(obj)) {
    const res = 1;
    cache.set(obj, res);
  }
  return cache.get(obj);
}

const res = getValue(b);
console.log(res);
const res2 = getValue(b);
console.log(res2);
