"use strict";

// когда загрзился контент документа
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOMContentLoaded");
  console.log(event);
});

// загрузилось все
window.addEventListener("load", function (event) {
  console.log("load");
  console.log(event);
});

// перед тем как страница выгружается (например, при переходе на другую страницу спрашивает уверен ли есть не сохраненные данные)
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = "";
});
