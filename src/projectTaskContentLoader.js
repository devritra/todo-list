export function loadProjectTaskContentToTheDom(projectUUID){
    const mainContent = document.querySelector(".main_content");
    mainContent.innerHTML = "";
    const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
    const targetProjectIndex = storedProjectArray.findIndex((project)=>{
        console.log(project.projectUUID);
        return project.projectUUID === projectUUID;
    });
    const targetProjectTaskArray = storedProjectArray[targetProjectIndex].projectTaskArray;
    if(targetProjectTaskArray){
        const projectTaskArrayLength = targetProjectTaskArray.length;
        if(projectTaskArrayLength >= 1){
            for(let i=0; i < projectTaskArrayLength; i++){
                const projectTaskCard = document.createElement("div");
                projectTaskCard.classList.add("project_task_card");
                projectTaskCard.classList.add("task_card");
                const storedProjectTaskObj = storedTaskArray[i];
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
                removeTaskBtn.dataset.action = "remove_task";
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