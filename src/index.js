import generateHomePage from "./generateHomePage";
import generateMenuPage from "./generateMenuPage";
import generateAboutPage from "./generateAboutPage";
import loadPage from "./loadPage";

const homePage = generateHomePage();
const menuPage = generateMenuPage();
const aboutPage = generateAboutPage();

const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click",() => loadPage(menuPage));

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click",() => loadPage(homePage));

const aboutButton = document.querySelector(".about");
aboutButton.addEventListener("click",() => loadPage(aboutPage));

loadPage(homePage);