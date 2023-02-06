
const content = document.getElementById("content");


const displayWindow = () => {
    
    const navbar = document.createElement("div");
    navbar.classList.add("grey", "nav-bar");
    content.appendChild(navbar);
    navbar.textContent="NavBAR"

    const mainLeft = document.createElement('div');
    mainLeft.classList.add("mainLeft", "green");
    content.appendChild(mainLeft);
    mainLeft.textContent="MainLeft"


    const mainRight = document.createElement('div');
    mainRight.classList.add("mainRight", 'grey');
    content.appendChild(mainRight);
    mainRight.textContent="MainRight"


    const footer = document.createElement("div");
    footer.classList.add("brown", "footer");
    content.appendChild(footer);
    footer.textContent="Footer"

}

displayWindow();

console.log("Hello from the other side~~!!!")