"use strict";

const date = new Date();

console.log(date);

console.log(new Intl.DateTimeFormat("ru-RU").format(date));

const option1 = {
  hour: "numeric",
  minute: "numeric",
};
console.log(new Intl.DateTimeFormat("ru-RU", option1).format(date));

const option2 = {
  hour: "numeric",
  minute: "numeric",
  month: "long",
  weekday: "short",
  year: "2-digit",
};
console.log(new Intl.DateTimeFormat("en-US", option2).format(date));
console.log(new Intl.DateTimeFormat("ru-RU", option2).format(date));

// можем не вводить локаль, а получать от пользователя
console.log(navigator.language);
console.log(new Intl.DateTimeFormat(navigator.language, option2).format(date));
