"use strict";

class ProductRepository {
  async getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    console.log(await response.json());
    return this;
  }
}

const rep1 = new ProductRepository();
rep1.getProducts();

const asyncArrow = async () => {
  const response = await fetch("https://dummyjson.com/products");
  console.log(await response.json());
  return this;
};

asyncArrow();
