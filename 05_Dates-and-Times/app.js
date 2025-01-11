"use strict";

const now = new Date();
console.log(now);

console.log(new Date("01-11-2025"));
console.log(new Date("01/11/2025"));
console.log(new Date("2025/01/11"));
console.log(new Date("11 Jan 2025"));
console.log(new Date("Jan 11 2025 17:44:26"));
console.log(new Date("11 Янв 2025"));

console.log(new Date(2025, 0, 11, 17, 51, 31)); // (год, месяц, число, часб минута, секунда) *месяц начинается с 0
console.log(new Date(2025, 0, 51));
console.log(new Date(2025, 0, 11 + 365));

console.log(new Date(0)); // 0 - time stamp - количество миллисекунд, прошедших с 1 января 1970 года
console.log(new Date(1 * 24 * 60 * 60 * 1000));

console.log(Date.now()); // получаем time stamp
console.log(new Date(Date.now()));

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate()); // число
console.log(now.getDay()); // день недели
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime()); // тот же time stamp

console.log(new Date(now.setFullYear(2030)));
