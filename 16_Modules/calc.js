export function add(first, second) {
  return first + second;
}

export function sub(first, second) {
  return first - second;
}

// console.log("first");

setTimeout(() => {
  add = function (first, second) {
    return first * second;
  };
}, 2000);
