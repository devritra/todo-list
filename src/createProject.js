import { title, description } from "./mediatorForProjectOperation";
class createProject{
    #title;
    #description;
    projectTaskArray;
    constructor(title, description){
        this.#title = title;
        this.#description = description;
        this.projectTaskArray = [];
    }
    getTitle(){
        return this.#title;
    }
    setTitle(newTitle){
        this.#title = newTitle;
    }
    getDescription(){
        return this.#description;
    }
    setDescription(newDescription){
        this.#description = newDescription;
    }
}

const project = new createProject(title, description);
export default project;