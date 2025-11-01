import "./style.css";

// imported the barrel file which has references for all files that are involves with it
import "./operateOnTaskArray";
import "./mediatorForProjectOperation";
import "./mediatorForProjectTaskOperation";
import "./eventHandler"

const storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));
if(storedTaskArray.length<1){
    const taskArray = [];
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}
const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
if(storedProjectArray.length<1){
    const projectArray = [];
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
}