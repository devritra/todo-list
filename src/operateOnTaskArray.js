export function operateOnTaskArray(todo){
    const storedTaskArray = JSON.parse(localStorage.getItem("taskArray"));
    storedTaskArray.push(todo);
    localStorage.setItem("taskArray", JSON.stringify(storedTaskArray));
}