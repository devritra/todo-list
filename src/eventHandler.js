import { loadTaskCOntentToDom } from "./taskContentLoader";
// import { removeTaskFromTaskArray } from "./removeTaskFromTaskArray";
// import { createTask } from "./createTask";
// import { operateOnTaskArray } from "./operateOnTaskArray";

// let title;
// let description;
// let dueDate;
// let priority;
const main = document.querySelector(".main");
main.addEventListener("click", (e)=>{
    switch (e.target.dataset.action) {
//         case "load_home":
//             // later
//             break;
        case "load_tasks":
            loadTaskCOntentToDom();
            break;
//         case "remove_task":
//             const taskCard = e.target.closest(".task_card");
//             const mainContent = document.querySelector(".main_content");
//             const taskUUID = taskCard.dataset.action;
//             removeTaskFromTaskArray(taskUUID);
//             mainContent.removeChild(taskCard);
//             break;
        case "show_task_adding_dialog":
        case "show_task_adding_dialog_text":
            const taskAddingForm = document.querySelector("#task_adding_form");
            taskAddingForm.reset();
            const taskAddingDialog = document.querySelector("#task_adding_dialog");
            taskAddingDialog.showModal();
            break;
//         case "add_task_from_dialog":
//             const taskTitleInput = document.querySelector("#task_title_input");
//             const taskDescInput = document.querySelector("#task_desc_input");
//             const taskDueDateInput = document.querySelector("#task_date_input");
//             const taskPriorityInputList = document.getElementsByName("priority");
//             for(let i=0; i<taskPriorityInputList.length; i++){
//                 if(taskPriorityInputList[i].checked){
//                     priority = taskPriorityInputList[i].value;
//                 }
//             }
//             title = taskTitleInput.value;
//             description = taskDescInput.value;
//             dueDate = taskDueDateInput.value;
//             const newTask = new createTask(title, description, dueDate, priority);
//             operateOnTaskArray(newTask);
//             const taskAddingDialogAgain = document.querySelector("#task_adding_dialog");
//             taskAddingDialogAgain.close();
//             loadTaskCOntentToDom();
    }
})
// export {title, description, dueDate, priority};