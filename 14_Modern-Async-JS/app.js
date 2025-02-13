"use strict";

async function getAllProducts() {
  const request = await fetch("https://dummyjson.com/products");
  return request.json();
}

async function getProduct(id) {
  const request = await fetch("https://dummyjson.com/products/" + id);
  return request.json();
}

async function getProductError(id) {
  const request = await fetch("https://dummyjsons.com/products/" + id);
  return request.json();
}

async function main() {
  const { products } = await getAllProducts();
  const result = await Promise.all(
    products.map((product) => getProduct(product.id))
  );
  console.log(result);
  // for (const product of products) {
  //   const response = await getProduct(product.id);
  //   console.log(response);
  // }
}

main();
