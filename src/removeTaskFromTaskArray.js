// export function removeTaskFromTaskArray(taskUUID){
//     const storedProjectArray = JSON.parse(localStorage.getItem("taskArray"));
//     const targetProjectIndex = storedProjectArray.findIndex((project)=>{
//         project.UUID === taskUUID;
//     })
//     storedProjectArray.splice(targetProjectIndex, 1);
//     localStorage.setItem("taskArray", JSON.stringify(storedProjectArray));
// }