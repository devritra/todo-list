export class createTask{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority;
        this.taskUUID = crypto.randomUUID();
    }
}

export class createTaskForTheDom{
    #title;
    #description;
    #dueDate;
    #priority;
    constructor(title, description, dueDate, priority, taskUUID){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.taskUUID = taskUUID;
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
    getDueDate(){
        return this.#dueDate;
    }
    setDueDate(newDueDate){
        this.#dueDate = newDueDate;
    }
    getPriority(){
        return this.#priority;
    }
    setPriority(newPriority){
        this.#priority = newPriority;
    }
}