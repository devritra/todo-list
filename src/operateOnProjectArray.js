export function operateOnProjectArray(project){
    const storedProjectArray = JSON.parse(localStorage.getItem("projectArray"));
    storedProjectArray.push(project);
    localStorage.setItem("projectArray", JSON.stringify(storedProjectArray));
}