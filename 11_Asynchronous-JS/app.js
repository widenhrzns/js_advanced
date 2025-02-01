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
  console.log(products);

  const request = new XMLHttpRequest();
  request.open("GET", "https://dummyjson.com/products/" + products[0].id);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.response);
    console.log(data);

    const request = new XMLHttpRequest();
    request.open("GET", "https://dummyjson.com/products/" + products[1].id);
    request.send();

    request.addEventListener("load", function () {
      const data = JSON.parse(this.response);
      console.log(data);
    });
  });
});
