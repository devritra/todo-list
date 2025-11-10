import "./style.css";
import "./eventHandler"
import { createProject } from "./createProject";

if(!JSON.parse(localStorage.getItem("taskArray"))){
    const taskArray = [];
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}
if(!JSON.parse(localStorage.getItem("projectArray"))){
    const title = "Example project";
    const description = "click on it to store your tasks inside this project"
    const exampleProject = new createProject(title, description)
    const projectArray = [exampleProject];
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
}