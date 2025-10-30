class createProject{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
    getTitle(){
        return this.title;
    }
    setTitle(newTitle){
        this.title = newTitle;
    }
    getDescription(){
        return this.description;
    }
    setDescription(newDescription){
        this.description = newDescription;
    }
}

const project = new createProject(title, description);
export default project;