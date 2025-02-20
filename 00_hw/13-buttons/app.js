"use strict";

const buttons = document.querySelector(".game__buttons");
const titleScore = document.querySelector(".title__score");

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
  gameData.score++;
  titleScore.innerText = gameData.score;
  localStorage.setItem("gameData", JSON.stringify(gameData));
}

buttons.addEventListener("click", (event) => {
  buttonClick(event);
});
