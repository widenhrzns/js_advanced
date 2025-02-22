"use strict";

import { User } from "./modules/user.js";
import { Task } from "./modules/task.js";

const task = new Task("Анжумания!");
const user = new User(task);

user.do();
