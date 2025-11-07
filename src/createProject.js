// import { title, description } from "./mediatorForProjectOperation";
// export class createProject{
//     #title;
//     #description;
//     #projectUUID;
//     projectTaskArray;
//     constructor(title, description){
//         this.#title = title;
//         this.#description = description;
//         this.#projectUUID = crypto.randomUUID();
//         this.projectTaskArray = [];
//         this.toJSON = ()=>{
//             return {
//                 title: this.#title,
//                 description: this.#description,
//                 projectUUID: this.#projectUUID
//             }
//         }
//     }
//     getTitle(){
//         return this.#title;
//     }
//     setTitle(newTitle){
//         this.#title = newTitle;
//     }
//     getDescription(){
//         return this.#description;
//     }
//     setDescription(newDescription){
//         this.#description = newDescription;
//     }
// }

// const project = new createProject(title, description);
// export {project};