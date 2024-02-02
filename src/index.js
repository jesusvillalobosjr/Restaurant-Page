import generateHomePage from "./generateHomePage";
import generateMenuPage from "./generateMenuPage";
import loadPage from "./loadPage";

const homePage = generateHomePage();
const menuPage = generateMenuPage();

const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click",() => loadPage(menuPage));

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click",() => loadPage(homePage));

loadPage(homePage);