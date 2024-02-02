function generateDivContainer(divClass){
    const container = document.createElement('div');
    container.classList.add(divClass);
    return container;
}

function generateText(textClass,textContent){
    const text = document.createElement('p');
    text.classList.add(textClass);
    text.textContent = textContent;
    return text;
}

function generateImage(className,url,alt){
    const image = document.createElement('img');
    image.classList.add(className);
    image.src = url;
    image.alt = alt;
    return image;
}

function generateH1(className,textContent){
    const h1 = document.createElement('h1');
    h1.classList.add(className);
    h1.textContent = textContent;
    return h1;
}

export { generateDivContainer, generateText, generateImage,generateH1 };