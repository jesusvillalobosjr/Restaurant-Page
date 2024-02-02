export default function changeActiveState(container){
    if(document.querySelector(".active") === null){
        container.classList.add("active");
    }else{
        const active = document.querySelector(".active");
        active.classList.remove("active");
        active.style.display = "none";
        container.classList.add("active");
        container.style.display = "";
    }
}