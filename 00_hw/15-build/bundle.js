(function () {
  'use strict';

  class User {
    #Task;

    constructor(Task) {
      this.#Task = Task;
    }

    do() {
      this.#Task.run();
      return this;
    }
  }

  class Task {
    #message;

    constructor(message) {
      this.#message = message;
    }

    run() {
      console.log(this.#message);
      return this;
    }
  }

  const task = new Task("Анжумания!");
  const user = new User(task);

  user.do();

})();
