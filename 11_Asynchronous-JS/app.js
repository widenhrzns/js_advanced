"use strict";

/*
  Получить среднюю цену товара из API
  https://dummyjson.com/products
*/

const request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products");
request.send();

request.addEventListener("load", function () {
  const { products } = JSON.parse(this.response);
  const sum = products.reduce((acc, product) => (acc += product.price), 0);
  console.log(sum / products.length);
});
