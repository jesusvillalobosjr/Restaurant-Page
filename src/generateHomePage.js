import { generateDivContainer,generateText,generateImage,generateH1 } from "./createDomElements";

function generateHomePage(){
    const header = document.querySelector("header");
    const navBar = document.querySelector("nav");
    header.insertBefore(generateH1("title","Casita Linda"),navBar);

    const content = generateDivContainer("restaurant-intro");
    content.appendChild(generateText("description","Best tacos in the country!"));
    content.appendChild(generateText("founding-fact","Made in 2000."));
    content.appendChild(generateImage("intro-image","https://media.wbur.org/wp/2017/04/0427_olvera-1000x693.jpg","Owner of Casita Linda"));
    content.appendChild(generateText("order-information","Available for dine-in and takeout!"));

    return content;
}

export default generateHomePage;