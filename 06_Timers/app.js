"use strict";

/*
    Таймер пиццы 
    Сделать таймер пиццы (функция, принимающая время),
    который будет выводить в консоль секунды, 
    оставшиеся до готовности пицы и сообщение по готовности. 
    00:04 
    00:03 
    00:02 
    00:01 
    00:00 
    🍕!!!
*/

function pizzaTimer(ms = 5000) {
  const end = new Date().getTime() + ms;
  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat(navigator.language, {
        minute: "numeric",
        second: "numeric",
      }).format(end + 100 - new Date())
    );
    ms -= 1000;
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    console.log("🍕!!!");
  }, ms);
}

pizzaTimer(10000);
