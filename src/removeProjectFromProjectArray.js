export function removeProjectFromProjectArray(projectid){
    const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
    const targetProjectIndex = storedProjectArray.findIndex((project)=>{
        console.log(project.projectUUID);
        return project.projectUUID === projectid;
    })
    console.log(targetProjectIndex);
    storedProjectArray.splice(targetProjectIndex, 1);
    localStorage.setItem("projectArray", JSON.stringify(storedProjectArray));
}