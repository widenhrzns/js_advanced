"use strict";

/* 
    Реализовать на функциях и прототипах корзину товаров с методами
    - Добавить товар
    - Увеличить число товаров 
    - Уменишить число товаров (удалить их, если 0)
*/
const product1 = { id: 1, name: "Bread", count: 1 };
const product2 = { id: 2, name: "Semen", count: 1 };
const product3 = { id: 3, name: "Fingers", count: 1 };

const Cart = function () {
  this.products = [];
};

Cart.prototype.addProduct = function (productAdded) {
  if (this.products.find((product) => product.id === productAdded.id)) {
    return;
  }
  this.products.push(productAdded);
};

Cart.prototype.increaseAmount = function (id) {
  this.products = this.products.map((product) => {
    if (product.id === id) {
      product.count += 1;
      return product;
    }
    return product;
  });
};

Cart.prototype.decreaseAmount = function (id) {
  this.products = this.products
    .map((product) => {
      if (product.id === id) {
        product.count -= 1;
        return product;
      }
      return product;
    })
    .filter((product) => product.count > 0);
};

const cart = new Cart();

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

cart.increaseAmount(3);
cart.increaseAmount(1);
cart.increaseAmount(1);

cart.decreaseAmount(3);
cart.decreaseAmount(3);
cart.decreaseAmount(2);

console.log(cart);
