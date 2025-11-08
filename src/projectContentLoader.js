import { createProjectForTheDom } from "./createProject";
export function loadProjectContentToDom(){
    const navbarHeading = document.querySelector(".navbar>h1");
    const navbarText = document.querySelector(".navbar>p");
    const mainContent = document.querySelector(".main_content");

    navbarHeading.textContent = "My projects";
    navbarText.textContent = "A place where you can keep all of your projects";
    mainContent.innerHTML = "";
    const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
    const projectArrayLength = storedProjectArray.length;
    if(projectArrayLength >= 1){
        for(let i=0; i < projectArrayLength; i++){
            const projectCard = document.createElement("div");
            projectCard.classList.add("project_card");
            const storedProjectObj = storedProjectArray[i];
            console.log(storedProjectObj.title)
            let title = storedProjectObj.title;
            let description = storedProjectObj.description;
            let projectUUID = storedProjectObj.projectUUID;
            const projectObj = new createProjectForTheDom(title, description, projectUUID);
            projectCard.dataset.project_uuid = projectObj.projectUUID;
            const projectTitle = document.createElement("p");
            projectTitle.textContent = projectObj.getTitle();
            const projectDesc = document.createElement("p");
            projectDesc.textContent = projectObj.getDescription();
            const removeProjectBtn = document.createElement("button");
            removeProjectBtn.textContent = "X";
            removeProjectBtn.dataset.action = "remove_project";
            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectDesc);
            projectCard.appendChild(removeProjectBtn);
            mainContent.appendChild(projectCard);
        }
    }
    const addProjectCard = document.createElement("div");
    addProjectCard.classList.add("add_project_card");
    addProjectCard.dataset.action = "show_project_adding_dialog";
    const addProjectCardText = document.createElement("p");
    addProjectCardText.dataset.action = "show_project_adding_dialog_text"
    addProjectCardText.textContent = "Add a new project";
    addProjectCard.appendChild(addProjectCardText);
    mainContent.appendChild(addProjectCard);
}