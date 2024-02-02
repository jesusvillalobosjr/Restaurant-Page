import { generateDivContainer, generateText } from "./createDomElements";

export default function generateMenuPage(){
    const container = generateDivContainer("menu-container");

    const asadaTaco = generateDivContainer("menu-item");
    generateMenuItem(asadaTaco,"Taco de Asada",3);
    container.appendChild(asadaTaco);

    const birriaTaco = generateDivContainer("menu-item");
    generateMenuItem(birriaTaco,"Taco de Birria",4);
    container.appendChild(birriaTaco);

    const cabezaTaco = generateDivContainer("menu-item");
    generateMenuItem(cabezaTaco,"Taco de Cabeza",2);
    container.appendChild(cabezaTaco);

    const pastorTaco = generateDivContainer("menu-item");
    generateMenuItem(pastorTaco,"Taco al Pastor",4);
    container.appendChild(pastorTaco);

    return container;
}

function generateMenuItem(element, name,price){
    const icon = generateText("icon","🌮");
    const itemName = generateText("taco-name",name);
    const itemPrice = generateText("taco-price",`Price: $${price}`);

    const arr = [icon,itemName,itemPrice];
    for(const domElement of arr){
        element.appendChild(domElement);
    }
}