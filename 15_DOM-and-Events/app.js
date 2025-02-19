"use strict";

const button = document.querySelector(".button");

const eventHandler = function (event) {
  console.log("event1");
};

button.addEventListener("mouseover", eventHandler);
button.addEventListener("click", (event) => {
  console.log("event2");
  button.removeEventListener("click", eventHandler);
});
