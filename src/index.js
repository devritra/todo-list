import "./style.css";

// imported the barrel file which has references for all files that are involves with it
import "./mediatorForTaskOperation";
import "./mediatorForProjectOperation";
import "./mediatorForProjectTaskOperation";
import "./eventHandler"

const taskArray = [];
localStorage.setItem("taskArray", JSON.stringify(taskArray));
const projectArray = [];
localStorage.setItem("projectArray", JSON.stringify(projectArray));