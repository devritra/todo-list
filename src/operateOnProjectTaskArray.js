export function operateOnProjectTaskArray(todo, projectUUID){
    const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
    const storedProjectIndex = storedProjectArray.findIndex((project)=>{
        console.log(project.projectUUID);
        return project.projectUUID === projectUUID;
    });
    storedProjectArray[storedProjectIndex].projectTaskArray.push(todo);
    localStorage.setItem("projectArray", JSON.stringify(storedProjectArray));
}