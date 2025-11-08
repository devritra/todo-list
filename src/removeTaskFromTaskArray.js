export function removeTaskFromTaskArray(taskid){
    const storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));
    const targetTaskIndex = storedTaskArray.findIndex((task)=>{
        console.log(task.taskUUID);
        return task.taskUUID === taskid;
    })
    console.log(targetTaskIndex);
    storedTaskArray.splice(targetTaskIndex, 1);
    localStorage.setItem("taskArray", JSON.stringify(storedTaskArray));
}