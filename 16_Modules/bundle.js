(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function add(first, second) {
    return first + second;
  }

  function sub(first, second) {
    return first - second;
  }

  const a$1 = 1;
  console.log(a$1);

  const a = 2;

  console.log(sub(1, 3));
  console.log(add(1, 3));
  console.log(a);

  /*
    rollup app.js --file bundle.js --format iife
    rollup app.js --file bundle.js --format cjs 
    rollup app.js --file bundle.js --format umd --name "myBundle" 
  */

}));
