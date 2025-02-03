"use strict";

// fetch("https://dummyjson.com/productss")
//   .then(
//     (response) => {
//       console.log(response);
//       return response.json();
//     },
//     (error) => console.log(error)
//   )
//   .then(
//     ({ products }) => {
//       console.log(products);
//       return fetch("https://dummyjson.com/products/" + products[0].id);
//     },
//     (error) => console.log(error)
//   )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

fetch("https://dummyjson.com/productss")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(({ products }) => {
    console.log(products);
    return fetch("https://dummyjson.com/products/" + products[0].id);
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
