"use strict";

const buttons = document.querySelector(".game__buttons");
const score = document.querySelector(".title__score");
let count = 0;

function buttonClick(event) {
  const button = event.target;

  const isButton = button.parentElement === buttons;
  const isActive = button.classList.value.includes("button_active");
  if (!isButton || isActive) return;

  [...buttons.children].forEach((button) => {
    button.classList.remove("button_active");
    button.innerText = "Press me";
  });

  button.classList.add("button_active");
  button.innerText = "Pressed!";
  count++;
  score.innerText = count;
}

buttons.addEventListener("click", (event) => {
  buttonClick(event);
});
