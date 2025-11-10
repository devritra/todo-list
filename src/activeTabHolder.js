let activeTab;
export function setTabAsHome(){
    return activeTab = "home";
}
export function setTabAsCalender(){
    return activeTab = "calender";
}
export function setTabAsTask(){
    return activeTab = "task";
}
export function setTabAsProject(){
    return activeTab = "project";
}
export function setTabAsProjectTask(){
    return activeTab = "project task";
}
export function getActiveTab(){
    return activeTab;
}