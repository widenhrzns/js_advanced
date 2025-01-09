"use strict";

const options1 = {
  style: "currency",
  currency: "RUB",
  //   useGrouping: false,
};

const options2 = {
  style: "currency",
  currency: "USD",
};
console.log(new Intl.NumberFormat("ru-RU", options1).format(23000));
console.log(new Intl.NumberFormat("en-US", options2).format(23000));
// console.log(new Intl.NumberFormat("ar-SY", options2).format(23000));

const options3 = {
  style: "decimal",
};
console.log(new Intl.NumberFormat("ru-RU", options3).format(10000));

const options4 = {
  style: "percent",
};
console.log(new Intl.NumberFormat("ru-RU", options4).format(0.8));

const options5 = {
  style: "unit",
  unit: "celsius",
};
console.log(new Intl.NumberFormat("ru-RU", options5).format(15));

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
