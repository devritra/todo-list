// import { title, description } from "./mediatorForProjectOperation";
export class createProject{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.projectUUID = crypto.randomUUID();
    }
}
export class createProjectForTheDom{
    #title;
    #description;
    projectTaskArray;
    constructor(title, description, projectUUID){
        this.#title = title;
        this.#description = description;
        this.projectUUID = projectUUID;
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

// const project = new createProject(title, description);
// export {project};