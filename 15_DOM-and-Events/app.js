"use strict";

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const el = document.querySelector(".cards");
const el2 = document.querySelectorAll("meta");
console.log(el);
console.log(el2);

const el3 = document.getElementById("cards");
const el4 = document.getElementsByClassName("cards");
console.log(el3);
console.log(el4);

const el5 = document.getElementsByTagName("meta");
console.log(el5);

const button = document.createElement("button");
button.innerHTML = "test";
const button2 = document.createElement("button");
button2.innerHTML = "test2";

el.append(button);
// el.prepend(button2);
// el.before(button2);
// el.after(button2);

function generateIdeas() {
  el.remove();
}
