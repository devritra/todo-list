import { title, description, dueDate, priority, projectUUID } from "./mediatorForProjectTaskOperation";
import { createTask } from "./mediatorForProjectTaskOperation";

const projectTask = new createTask(title, description, dueDate, priority);
const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
const targetProjectIndex = storedProjectArray.findIndex((project)=>{
    project.projectUUID === projectUUID
});
const targetProject = storedProjectArray[targetProjectIndex];
targetProject.projectArray.push(projectTask);
storedProjectArray.splice(targetProjectIndex, 1, targetProject);
localStorage.setItem("projectArray", JSON.stringify(storedProjectArray));