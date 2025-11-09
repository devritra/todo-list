export function removeProjectTaskFromProjectTaskArray(projectTaskUUID, activeProjectUUID){
    const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
    const targetProjectIndex = storedProjectArray.findIndex((project)=>{
        return project.projectUUID === activeProjectUUID;
    });
    const targetProjectTaskArray = storedProjectArray[targetProjectIndex].projectTaskArray;
    const targetProjectTaskIndex = targetProjectTaskArray.findIndex((projectTask)=>{
        return projectTask.taskUUID === projectTaskUUID;
    });
    storedProjectArray[targetProjectIndex].projectTaskArray.splice(targetProjectTaskIndex, 1);
    localStorage.setItem("projectArray", JSON.stringify(storedProjectArray));
}