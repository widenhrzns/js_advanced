"use strict";

/*
  Сделать генератор 3х идей от скуки
  https://bored.api.lewagon.com/api/activity
  с отображением на странице
*/
const cards = document.querySelector(".cards");

async function getActivity() {
  const response = await fetch("https://bored.api.lewagon.com/api/activity");
  return response.json();
}

async function generateIdeas() {
  try {
    cards.innerHTML = "";
    const data = await Promise.all([
      getActivity(),
      getActivity(),
      getActivity(),
    ]);
    data.forEach((item) => {
      const card = document.createElement("div");
      card.innerHTML = item.activity;
      cards.appendChild(card);
    });
  } catch (error) {
    console.warn(error);
  }
}
