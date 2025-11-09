import "./style.css";
import "./eventHandler"

if(!JSON.parse(localStorage.getItem("taskArray"))){
    const taskArray = [];
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}
if(!JSON.parse(localStorage.getItem("projectArray"))){
    const projectArray = [];
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
}