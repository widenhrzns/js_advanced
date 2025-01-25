"use strict";

const task = {
  title: "Task1",
  dueTo: new Date("2025/01/01"),

  get isOverdue() {
    return this.dueTo <= new Date();
  },

  set isOverdue(isOverdueTask) {
    if (isOverdueTask) {
      this.dueTo = new Date();
    }
  },
};

console.log(task.isOverdue);

task.isOverdue = true;
console.log(task);

///

class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }

  get isOverdue() {
    return this.dueDate <= new Date();
  }

  set dueDate(date) {
    if (date < new Date()) {
      return;
    }
    this._dueDate = date;
  }
}

const newTask = new Task("Task2", new Date());
console.log((newTask.dueDate = new Date("2026/01/01")));
console.log(newTask);
