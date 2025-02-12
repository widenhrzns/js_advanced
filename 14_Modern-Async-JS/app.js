"use strict";

/*
    Получить геолокацию пользователя и по координатам определить 
    город, отправив запрос: 
    https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=00&longitude=00
*/

function getCoords() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve(coords);
      },
      (error) => reject(new Error(error.message))
    );
  });
}

async function findLocation() {
  try {
    const { latitude, longitude } = await getCoords();
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.warn(error);
  }
}

findLocation();
findLocation();
