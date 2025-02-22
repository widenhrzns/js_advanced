export class User {
  #Task;

  constructor(Task) {
    this.#Task = Task;
  }

  do() {
    this.#Task.run();
    return this;
  }
}
