"use strict";

const text = document.querySelector(".text");
const search = document.querySelector(".search");

for (let i = 0; i < 100; i++) {
  const el = document.createElement("div");
  el.innerText = i;
  text.append(el);
}

function pickText(event) {
  const inputValue = event.target.value;
  for (const el of [...text.children]) {
    if (el.innerText.includes(inputValue)) {
      el.classList.add("picked");
      continue;
    }
    el.classList.remove("picked");
  }
}

search.addEventListener("change", (event) => {
  pickText(event);
});
