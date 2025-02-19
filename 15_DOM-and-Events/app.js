"use strict";

const wrapper = document.querySelector(".wrapper");
console.log(wrapper);

const inner = wrapper.querySelector(".inner");
console.log(inner.childNodes);
console.log(inner.children);
console.log([...inner.children][0]);

console.log(inner.parentElement);
console.log(inner.parentNode);

const button = inner.querySelector(".button");
console.log(button.closest(".wrapper")); // возврщает ближайшего родителя (вверх по дереву)
console.log(button.closest(".button"));
console.log(button.closest("a"));
console.log(button.closest(".test"));

// элементы на том же уровне
console.log(button.previousElementSibling);
console.log(button.previousSibling);

console.log(button.nextElementSibling);
console.log(button.nextSibling);

console.log([...button.parentElement.children].at(-1));
