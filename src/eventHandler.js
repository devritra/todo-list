import { loadTaskCOntentToDom } from "./taskContentLoader";
import { removeTaskFromTaskArray } from "./removeTaskFromTaskArray";

const body = document.querySelector("body");
body.addEventListener("click", (e)=>{
    switch (e.target.dataset.action) {
        case "load_home":
            // later
            break;
        case "load_tasks":
            loadTaskCOntentToDom();
            break;
        case "remove_task":
            const taskCard = e.target.closest(".task_card");
            const mainContent = document.querySelector(".main_content");
            const taskUUID = taskCard.dataset.action;
            removeTaskFromTaskArray(taskUUID);
            mainContent.removeChild(taskCard);
            break;
        case "show_task_adding_dialog":
        case "show_task_adding_dialog_text":
            const taskAddingDialog = document.querySelector("#task_adding_dialog");
            taskAddingDialog.showModal();
    }
})