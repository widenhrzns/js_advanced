"use strict";

function generate(event) {
  console.log(event.target.getBoundingClientRect());

  console.log(`X OffSet: ${window.pageXOffset}`);
  console.log(`Y OffSet: ${window.pageYOffset}`);
  console.log(`clientWidth: ${document.documentElement.clientWidth}`);
  console.log(`clientHeight: ${document.documentElement.clientHeight}`);

  const el = document.querySelector(".down");
  const rect = el.getBoundingClientRect();
  console.log(el.getBoundingClientRect());

  window.scrollTo({
    left: window.pageXOffset + rect.left,
    top: window.pageXOffset + rect.top,
    behavior: "smooth",
  });
}
