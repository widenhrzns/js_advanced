"use strict";

async function getProducts() {
  try {
    const productsResponse = await fetch("https://dummyjson.com/productss");
    if (!productsResponse.ok) {
      throw new Error(productsResponse.status);
    }
    const { products } = await productsResponse.json();
    console.log(products);
    // throw new Error("Ошибка");

    const productResponse = await fetch(
      "https://dummyjson.com/products/" + products[0].id
    );
    const product = await productResponse.json();
    console.log(product);
  } catch (error) {
    console.warn(error);
  } finally {
    console.log("Finally");
  }
}

try {
  const a = 5;
  a = 4;
} catch (error) {
  console.error(error);
}

getProducts();
console.log("End");
