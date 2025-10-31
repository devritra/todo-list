// Imported from barrel file

import { title, description, dueDate, priority } from "./mediatorForTaskOperation";
export class createTask{
    #title;
    #description;
    #dueDate;
    #priority;
    constructor(title, description, dueDate, priority){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.UUID = crypto.randomUUID();
        this.toJSON = ()=>{
            return {
                title: this.#title,
                description: this.#description,
                dueDate: this.#dueDate,
                priority: this.#priority,
            }
        }
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
const todo = new createTask(title, description, dueDate, priority);
export {todo};