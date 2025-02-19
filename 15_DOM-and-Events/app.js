"use strict";

const button = document.querySelector(".button");
const inner = document.querySelector(".inner");
const wrapper = document.querySelector(".wrapper");

button.addEventListener("click", function (event) {
  console.log("button");
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = "#52ebff";
});

inner.addEventListener("click", function (event) {
  console.log("inner");
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = "#2a7983";

  //   event.stopPropagation();
});

wrapper.addEventListener(
  "click",
  function (event) {
    console.log("wrapper");
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = "#164045";
  },
  true
);

wrapper.addEventListener("click", function (event) {
  console.log("wrapper");
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = "#164045";
});
