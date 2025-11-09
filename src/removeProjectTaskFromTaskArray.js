export function removeProjectTaskFromTaskArray(projectUUID){
    const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
    const storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));
    const targetProjectIndex = storedProjectArray.findIndex((project)=>{
        return project.projectUUID === projectUUID;
    });
    const storedProjectTaskArray = storedProjectArray[targetProjectIndex].projectTaskArray;
    const storedProjectTaskArrayLength = storedProjectTaskArray.length;
    for(let i = 0; i<storedProjectTaskArrayLength; i++){
        const targetProjectTaskUUID = storedProjectTaskArray[i].taskUUID;
        const targetTaskIndex = storedTaskArray.findIndex((task)=>{
            return task.taskUUID === targetProjectTaskUUID;
        });
        storedTaskArray.splice(targetTaskIndex, 1);
    }
    localStorage.setItem("taskArray", JSON.stringify(storedTaskArray));
}