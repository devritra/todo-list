import { createTaskForTheDom } from "./createTask";
import { format } from "date-fns";

export function loadProjectTaskContentToTheDom(projectUUID){
    const mainContent = document.querySelector(".main_content_for_project_content");
    mainContent.innerHTML = "";
    mainContent.className = "main_content";
    const backBtnHolder = document.createElement("div");
    const backBtn = document.createElement("button");
    backBtn.textContent = "<";
    backBtn.dataset.action = "back_to_project_page";
    backBtnHolder.appendChild(backBtn);
    mainContent.appendChild(backBtnHolder);
    const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
    const targetProjectIndex = storedProjectArray.findIndex((project)=>{
        console.log(project.projectUUID);
        return project.projectUUID === projectUUID;
    });
    const storedProjectTaskArray = storedProjectArray[targetProjectIndex].projectTaskArray;
    if(storedProjectTaskArray){
        const projectTaskArrayLength = storedProjectTaskArray.length;
        if(projectTaskArrayLength >= 1){
            for(let i=0; i < projectTaskArrayLength; i++){
                const projectTaskCard = document.createElement("div");
                projectTaskCard.classList.add("project_task_card");
                projectTaskCard.classList.add("task_card");
                const storedProjectTaskObj = storedProjectTaskArray[i];
                let title = storedProjectTaskObj.title;
                let description = storedProjectTaskObj.description;
                let dueDate = storedProjectTaskObj.dueDate;
                let priority = storedProjectTaskObj.priority;
                let taskUUID = storedProjectTaskObj.taskUUID;
                const taskObj = new createTaskForTheDom(title, description, dueDate, priority, taskUUID);
                projectTaskCard.dataset.task_uuid = taskObj.taskUUID;
                const taskTitle = document.createElement("p");
                taskTitle.textContent = taskObj.getTitle();
                const taskDesc = document.createElement("p");
                taskDesc.textContent = taskObj.getDescription();
                const taskDueDate = document.createElement("p");
                taskDueDate.textContent = format(taskObj.getDueDate(), "d'th' MMMM', 'yyyy");
                const removeTaskBtn = document.createElement("button");
                removeTaskBtn.textContent = "X";
                removeTaskBtn.dataset.action = "show_project_task_delete_confirm_dialog";
                projectTaskCard.appendChild(taskTitle);
                projectTaskCard.appendChild(taskDesc);
                projectTaskCard.appendChild(taskDueDate);
                projectTaskCard.appendChild(removeTaskBtn);
                mainContent.appendChild(projectTaskCard);
            }
        }
    }
    const addProjectTaskCard = document.createElement("div");
    addProjectTaskCard.classList.add("add_project_task_card");
    addProjectTaskCard.dataset.action = "show_project_task_adding_dialog";
    const addProjectTaskCardText = document.createElement("p");
    addProjectTaskCardText.dataset.action = "show_project_task_adding_dialog_text"
    addProjectTaskCardText.textContent = "Add a new task";
    addProjectTaskCard.appendChild(addProjectTaskCardText);
    mainContent.appendChild(addProjectTaskCard);
}