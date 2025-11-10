import { loadTaskCOntentToDom } from "./taskContentLoader";
import { removeTaskFromTaskArray } from "./removeTaskFromTaskArray";
import { createTask } from "./createTask";
import { operateOnTaskArray } from "./operateOnTaskArray";

import { loadProjectContentToDom } from "./projectContentLoader";
import { createProject } from "./createProject";
import { operateOnProjectArray } from "./operateOnProjectArray";
import { removeProjectFromProjectArray } from "./removeProjectFromProjectArray";
import { loadProjectTaskContentToTheDom } from "./projectTaskContentLoader";

import { operateOnProjectTaskArray } from "./operateOnProjectTaskArray";
import { getActiveProjectUUID, setActiveProjectUUID } from "./activeProjectUUIDHolder";
import { removeProjectTaskFromProjectTaskArray } from "./removeProjectTaskFromProjectTaskArray";
import { removeProjectTaskFromTaskArray } from "./removeProjectTaskFromTaskArray";
import { setTabAsProject, setTabAsProjectTask } from "./activeTabHolder";

const mainContent = document.querySelector(".main_content");
const main = document.querySelector(".main");
let taskCard;
let taskUUID;
let projectCard;
let projectUUID;
let projectTaskCard;
let projectTaskUUID;
main.addEventListener("click", (e)=>{
    switch (e.target.dataset.action) {
//         case "load_home":
//             // later
//             break;
        case "load_tasks":
            mainContent.className = "main_content";
            loadTaskCOntentToDom();
            break;
        case "show_task_delete_confirm_dialog":
            const taskDeleteConfirmDialog = document.querySelector("#task_delete_confirm_dialog");
            taskDeleteConfirmDialog.showModal();
            taskCard = e.target.closest(".task_card");
            taskUUID = taskCard.dataset.task_uuid;
            break;
        case "remove_task":
            removeTaskFromTaskArray(taskUUID);
            mainContent.removeChild(taskCard);
            break;
        case "cancel_remove_task":
            const taskDeleteConfirmDialogAgain = document.querySelector("#task_delete_confirm_dialog");
            taskDeleteConfirmDialogAgain.showModal();
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
            const taskPriorityInputList = document.getElementsByName("task_priority");
            let title;
            let description;
            let dueDate;
            let priority;
            for(let i=0; i<taskPriorityInputList.length; i++){
                if(taskPriorityInputList[i].checked){
                    priority = taskPriorityInputList[i].value;
                }
            }
            if(!taskTitleInput.value){
                return;
            }
            if(!taskDueDateInput.value){
                return;
            } 
            if(!taskDescInput.value){
                taskDescInput.value = "No description for this task";
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
            mainContent.className = "main_content_for_project_content";
            setTabAsProject();
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
            if(!projectTitleInput.value){
                return;
            }
            if(!projectDescInput.value){
                projectDescInput.value = "No description for this project";
            }
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
        case "show_project_delete_confirm_dialog":
            const projectDeleteConfirmDialog = document.querySelector("#project_delete_confirm_dialog");
            projectDeleteConfirmDialog.showModal();
            projectCard = e.target.closest(".project_card");
            projectUUID = projectCard.dataset.project_uuid;
            break;
        case "remove_project":
            removeProjectTaskFromTaskArray(projectUUID);
            removeProjectFromProjectArray(projectUUID);
            mainContent.removeChild(projectCard);
            break;
        case "cancel_remove_project":
            const projectDeleteConfirmDialogAgain = document.querySelector("#project_delete_confirm_dialog");
            projectDeleteConfirmDialogAgain.showModal();
            break;
        case "show_project_task_adding_dialog":
        case "show_project_task_adding_dialog_text":
            const projectTaskAddingForm = document.querySelector("#project_task_adding_form");
            projectTaskAddingForm.reset();
            const projectTaskAddingDialog = document.querySelector("#project_task_adding_dialog");
            projectTaskAddingDialog.showModal();
            break;
        case "add_project_task_from_dialog":
            const projectTaskTitleInput = document.querySelector("#project_task_title_input");
            const projectTaskDescInput = document.querySelector("#project_task_desc_input");
            const projectTaskDueDateInput = document.querySelector("#project_task_date_input");
            const projectTaskPriorityInputList = document.getElementsByName("project_task_priority");
            if(!projectTaskTitleInput.value){
                return;
            }
            if(!projectTaskDueDateInput.value){
                return;
            }
            if(!projectTaskDescInput.value){
                projectTaskDescInput.value = "No description for this task";
            }
            let projectTaskTitle;
            let projectTaskDescription;
            let projectTaskDueDate;
            let projectTaskPriority;
            for(let i=0; i<projectTaskPriorityInputList.length; i++){
                if(projectTaskPriorityInputList[i].checked){
                    projectTaskPriority = projectTaskPriorityInputList[i].value;
                }
            }
            projectTaskTitle = projectTaskTitleInput.value;
            projectTaskDescription = projectTaskDescInput.value;
            projectTaskDueDate = projectTaskDueDateInput.value;
            const newProjectTask = new createTask(projectTaskTitle, projectTaskDescription, projectTaskDueDate, projectTaskPriority);
            operateOnProjectTaskArray(newProjectTask, getActiveProjectUUID());
            operateOnTaskArray(newProjectTask);
            const projectTaskAddingDialogAgain = document.querySelector("#project_task_adding_dialog");
            projectTaskAddingDialogAgain.close();
            loadProjectTaskContentToTheDom(getActiveProjectUUID());
            break;
        case "show_project_task_delete_confirm_dialog":
            const projectTaskDeleteConfirmDialog = document.querySelector("#project_task_delete_confirm_dialog");
            projectTaskDeleteConfirmDialog.showModal();
            projectTaskCard = e.target.closest(".project_task_card");
            projectTaskUUID = projectTaskCard.dataset.task_uuid;
            break;
        case "remove_project_task":
            removeProjectTaskFromProjectTaskArray(projectTaskUUID, getActiveProjectUUID());
            removeTaskFromTaskArray(projectTaskUUID);
            mainContent.removeChild(projectTaskCard);
            break;
        case "cancel_remove_project_task":
            const projectTaskDeleteConfirmDialogAgain = document.querySelector("#project_task_delete_confirm_dialog");
            projectTaskDeleteConfirmDialogAgain.showModal();
            break;
        case "back_to_project_page":
            mainContent.className = "main_content_for_project_content";
            setTabAsProject();
            loadProjectContentToDom();
            break;
    }

    projectCard = e.target.closest(".project_card");
    if(projectCard){
        if(!e.target.dataset.action || e.target.dataset.action === "show_project_tasks"){
            console.log("Project tasks");
            loadProjectTaskContentToTheDom(projectCard.dataset.project_uuid);
            setTabAsProjectTask();
            setActiveProjectUUID(projectCard.dataset.project_uuid);
            return;
        }
    }
    else {
        return;
    }
})
// export {title, description, dueDate, priority};