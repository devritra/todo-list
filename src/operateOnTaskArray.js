// Imported from barrel file
import { todo } from "./barrelFileForTaskOperation";

const storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));
storedTaskArray.push(todo);
localStorage.setItem("taskArray", JSON.stringify(storedTaskArray));
console.log(JSON.parse(localStorage.getItem("taskArray")));