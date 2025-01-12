"use strict";

/* 
    Сделать функцию, которая принимает пользователя и 
    проверяет, есть ли у него сегодня день рождения или нет
*/

const user1 = {
  name: "Vasya",
  birthday: "11/12/2022",
};

function isBirthday(user) {
  const today = new Date();
  const birthday = new Date(user.birthday);
  return (
    today.getDate() === birthday.getDate() &&
    today.getMonth() === birthday.getMonth()
  );
}

console.log(isBirthday(user1));
