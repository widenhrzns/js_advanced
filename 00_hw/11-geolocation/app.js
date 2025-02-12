"use strict";

function errorMaker(message) {
  return new Error(`[${message}]`);
}

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve(coords),
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(errorMaker("location access denied"));
          case error.POSITION_UNAVAILABLE:
            reject(errorMaker("location unavailable"));
          case error.TIMEOUT:
            reject(errorMaker("timed out"));
          default:
            reject(errorMaker("unknown error"));
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5 * 1000,
        maximumAge: 1 * 60 * 1000,
      }
    );
  });
}

getCurrentLocation()
  .then((data) => {
    console.log(
      `Latitude: ${data.latitude} \nLongitude: ${data.longitude} \nAccuracy: ${data.accuracy}`
    );
  })
  .catch((error) => console.log(error));
