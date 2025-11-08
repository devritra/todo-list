import { loadTaskCOntentToDom } from "./taskContentLoader";
import { removeTaskFromTaskArray } from "./removeTaskFromTaskArray";
import { createTask } from "./createTask";
import { operateOnTaskArray } from "./operateOnTaskArray";

import { loadProjectContentToDom } from "./projectContentLoader";
import { createProject } from "./createProject";
import { operateOnProjectArray } from "./operateOnProjectArray";
import { removeProjectFromProjectArray } from "./removeProjectFromProjectArray";
import { loadProjectTaskContentToTheDom } from "./projectTaskContentLoader";

const mainContent = document.querySelector(".main_content");
const main = document.querySelector(".main");
main.addEventListener("click", (e)=>{
    switch (e.target.dataset.action) {
//         case "load_home":
//             // later
//             break;
        case "load_tasks":
            loadTaskCOntentToDom();
            break;
        case "remove_task":
            const taskCard = e.target.closest(".task_card");
            mainContent = document.querySelector(".main_content");
            const taskUUID = taskCard.dataset.task_uuid;
            removeTaskFromTaskArray(taskUUID);
            mainContent.removeChild(taskCard);
            break;
        case "show_task_adding_dialog":
        case "show_task_adding_dialog_text":
            const taskAddingForm = document.querySelector("#task_adding_form");
            taskAddingForm.reset();
            const taskAddingDialog = document.querySelector("#task_adding_dialog");
            taskAddingDialog.showModal();
            break;
        case "add_task_from_dialog":
            const taskTitleInput = document.querySelector("#task_title_input");
            const taskDescInput = document.querySelector("#task_desc_input");
            const taskDueDateInput = document.querySelector("#task_date_input");
            const taskPriorityInputList = document.getElementsByName("priority");
            let title;
            let description;
            let dueDate;
            let priority;
            for(let i=0; i<taskPriorityInputList.length; i++){
                if(taskPriorityInputList[i].checked){
                    priority = taskPriorityInputList[i].value;
                }
            }
            title = taskTitleInput.value;
            description = taskDescInput.value;
            dueDate = taskDueDateInput.value;
            const newTask = new createTask(title, description, dueDate, priority);
            operateOnTaskArray(newTask);
            const taskAddingDialogAgain = document.querySelector("#task_adding_dialog");
            taskAddingDialogAgain.close();
            loadTaskCOntentToDom();
            break;
        case "load_projects":
            loadProjectContentToDom();
            break;
        case "show_project_adding_dialog":
        case "show_project_adding_dialog_text":
            const projectAddingForm = document.querySelector("#project_adding_form");
            projectAddingForm.reset();
            const projectAddingDialog = document.querySelector("#project_adding_dialog");
            projectAddingDialog.showModal();
            break;
        case "add_project_from_dialog":
            const projectTitleInput = document.querySelector("#project_title_input");
            const projectDescInput = document.querySelector("#project_desc_input");
            let projectTitle;
            let projectDescription;
            projectTitle = projectTitleInput.value;
            projectDescription = projectDescInput.value;
            const newProject = new createProject(projectTitle, projectDescription);
            operateOnProjectArray(newProject);
            const projectAddingDialogAgain = document.querySelector("#project_adding_dialog");
            projectAddingDialogAgain.close();
            loadProjectContentToDom();
            break;
        case "remove_project":
            const projectCard = e.target.closest(".project_card");
            const projectUUID = projectCard.dataset.project_uuid;
            removeProjectFromProjectArray(projectUUID);
            mainContent.removeChild(projectCard);
            break;
    }

    let projectCard = e.target.closest(".project_card");
    if(projectCard){
        console.log("Project tasks");
        loadProjectTaskContentToTheDom(projectCard.dataset.project_uuid)
    } else {
        return;
    }
})
// export {title, description, dueDate, priority};