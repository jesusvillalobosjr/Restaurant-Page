import { generateDivContainer, generateText } from "./createDomElements";

export default function generateAboutPage(){
    const aboutPage = generateDivContainer("about-container");
    const aboutIntroduction = generateText("about-introduction","Mexican owned restaurant named Casita Linda for the autentic Mexican feel. Founded in the year 2000!");
    const aboutOutro = generateText("about-outro","We are excited to meet you and serve you quality Mexican food!");
    const aboutContact = generateText("about-contact","Contact us at: 111-222-3333");

    aboutPage.appendChild(aboutIntroduction);
    aboutPage.appendChild(aboutOutro);
    aboutPage.appendChild(aboutContact);

    return aboutPage;
}