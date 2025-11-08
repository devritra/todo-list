let currentProjectUUID;
export function getActiveProjectUUID(){
    return currentProjectUUID;
}
export function setActiveProjectUUID(projectUUID){
    currentProjectUUID = projectUUID;
    return;
}