import changeActiveState from "./changeActiveState";

function loadPage(page){
    const container = document.querySelector("#content");

    changeActiveState(page);
    
    if(!container.contains(page)){
        container.appendChild(page);
    }
}

export default loadPage;