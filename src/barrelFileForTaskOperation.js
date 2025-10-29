// a barrel file that maintain communication between task proccesing related files.

// The three files that are involed handle getting the task details from UI,
// creating the task object from it and storing the task to the local storage respectively

// the path details should changed in this file for any file that is replaced any of these files

import {title, description, dueDate, priority} from "./test";
import "./createTask";
import "./operateOnTaskArray";
export * as todo from "./createTask";
export {title, description, dueDate, priority}