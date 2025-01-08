"use strict";

const max = 2 ** 53 - 1;

console.log(Number.MAX_SAFE_INTEGER); // max доступное число
console.log(max); // дальнейшие операции выше этого числа - небезопасные, тк мы молучем некорректный результат
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);

console.log(9481098190581958119248129398129319n); // BigInt
console.log(BigInt(9481098190581958119248129398129319)); // лучше передавать строку, тк движок все равно будет работать с числом и будут возникать некорретные реузьтаты
console.log(BigInt("9481098190581958119248129398129319"));

console.log(10n + 10n);
// console.log(10n + 10); нельзя миксовать BigInt и другие типы без явной конвертации
console.log(10n + BigInt(10));

console.log(10n * 10n);
console.log(10n * BigInt(10));

console.log(10n == 10); // для операторов сравнение приводить не нужно

console.log(typeof 10n);

console.log(10n / 3n); // остаток отбрасывается
