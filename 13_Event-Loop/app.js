"use strict";

// function wait(ms) {
//   const { resolve, reject, promise } = Promise.withResolvers();
//   setTimeout(() => {
//     resolve();
//   }, ms);
//   return promise;
// }

// async function run() {
//   console.log("start");
//   await wait(2000);
//   console.log("end");
// }

// run();

class Queue {
  #messages = [];
  #resolve;
  #reject;
  #promise;

  constructor() {
    const { resolve, reject, promise } = Promise.withResolvers();
    this.#promise = promise;
    this.#resolve = resolve;
    this.#reject = reject;
  }

  add(msg) {
    this.#messages.push(msg);
    return this;
  }

  close() {
    this.#resolve(this.#messages);
  }

  error(reason) {
    this.#reject(reason);
  }

  subscribe() {
    return this.#promise;
  }
}

const queue = new Queue();
const sub1 = queue.subscribe();
sub1.then((data) => console.log(data)).catch((error) => console.error(error));
const sub2 = queue.subscribe();
sub2.then((data) => console.log(data)).catch((error) => console.error(error));

// queue.add("msg1").add("msg2").close();
queue.add("msg1").add("msg2").error("не получен полседний пакет");
