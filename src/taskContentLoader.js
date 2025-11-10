import { createTaskForTheDom } from "./createTask";
import { format } from "date-fns";

export function loadTaskCOntentToDom(){
    const navbarHeading = document.querySelector(".navbar>h1");
    const navbarText = document.querySelector(".navbar>p");
    const mainContent = document.querySelector(".main_content");

    navbarHeading.textContent = "All tasks";
    navbarText.textContent = "A general task list for all tasks. Create and add tasks that you wanna get done.";
    mainContent.innerHTML = "";
    const storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));
    const taskArrayLength = storedTaskArray.length;
    if(taskArrayLength >= 1){
        for(let i=0; i < taskArrayLength; i++){
            const taskCard = document.createElement("div");
            taskCard.classList.add("task_card");
            const storedTaskObj = storedTaskArray[i];
            let title = storedTaskObj.title;
            let description = storedTaskObj.description;
            let dueDate = storedTaskObj.dueDate;
            let priority = storedTaskObj.priority;
            let taskUUID = storedTaskObj.taskUUID;
            const taskObj = new createTaskForTheDom(title, description, dueDate, priority, taskUUID);
            taskCard.dataset.task_uuid = taskObj.taskUUID;
            const taskTitle = document.createElement("p");
            taskTitle.textContent = taskObj.getTitle();
            const taskDesc = document.createElement("p");
            taskDesc.textContent = taskObj.getDescription();
            const taskDueDate = document.createElement("p");
            taskDueDate.textContent = format(taskObj.getDueDate(), "d'th' MMMM', 'yyyy");
            const removeTaskBtn = document.createElement("button");
            removeTaskBtn.textContent = "X";
            removeTaskBtn.dataset.action = "show_task_delete_confirm_dialog";
            taskCard.appendChild(taskTitle);
            taskCard.appendChild(taskDesc);
            taskCard.appendChild(taskDueDate);
            taskCard.appendChild(removeTaskBtn);
            if(taskObj.getPriority() === "high"){
                taskCard.style.borderColor = "red";
            }
            if(taskObj.getPriority() === "medium"){
                taskCard.style.borderColor = "orange";
            }
            if(taskObj.getPriority() === "low"){
                taskCard.style.borderColor = "#e5e50a";
            }
            mainContent.appendChild(taskCard);
        }
    }

    const addTaskCard = document.createElement("div");
    addTaskCard.classList.add("add_task_card");
    addTaskCard.dataset.action = "show_task_adding_dialog";
    const addTaskCardText = document.createElement("p");
    addTaskCardText.dataset.action = "show_task_adding_dialog_text"
    addTaskCardText.textContent = "Add a new task";
    addTaskCard.appendChild(addTaskCardText);
    mainContent.appendChild(addTaskCard);
}