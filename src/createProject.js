// import { title, description } from "./mediatorForProjectOperation";
export class createProject{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.projectUUID = crypto.randomUUID();
        this.projectTaskArray = [];
    }
}
export class createProjectForTheDom{
    #title;
    #description;
    projectTaskArray;
    constructor(title, description, projectUUID, projectTaskArray){
        this.#title = title;
        this.#description = description;
        this.projectUUID = projectUUID;
        this.projectTaskArray = projectTaskArray;
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

// const project = new createProject(title, description);
// export {project};