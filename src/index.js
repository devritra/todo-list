import "./style.css";

// imported the barrel file which has references for all files that are involves with it
import "./barrelFileForTaskOperation";
const taskArray = [];
localStorage.setItem("taskArray", JSON.stringify(taskArray));