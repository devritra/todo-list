export function removeTaskFromTaskArray(taskid){
    const storedProjectArray = JSON.parse(localStorage.getItem("taskArray"));
    const targetProjectIndex = storedProjectArray.findIndex((project)=>{
        console.log(project.taskUUID);
        return project.taskUUID === taskid;
    })
    console.log(targetProjectIndex);
    storedProjectArray.splice(targetProjectIndex, 1);
    localStorage.setItem("taskArray", JSON.stringify(storedProjectArray));
}