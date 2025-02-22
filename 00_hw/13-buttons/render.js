"use strict";

const game = document.querySelector(".game");
let gameData = JSON.parse(localStorage.getItem("gameData")) || { score: 0 };

function renderTitle() {
  const score = document.createElement("div");
  score.classList.add("game__title");
  score.innerHTML = ` SCORE: <span class="title__score">${gameData.score}</span>`;
  game.append(score);
}

function renderButtons() {
  const buttonsArea = document.createElement("div");
  buttonsArea.classList.add("game__buttons");

  for (let i = 0; i < 5; i++) {
    const button = document.createElement("button");
    button.innerText = "Press me";
    buttonsArea.append(button);
  }

  game.append(buttonsArea);
}

(() => {
  renderTitle();
  renderButtons();
})();
