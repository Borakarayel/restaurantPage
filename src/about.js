export const displayAbout = () => {
    const about = document.createElement('div');
    about.textContent="My restaurant page project is dedicated to promoting traditional Turkish food.";
    about.style.fontStyle = "italic";
    about.style.color = "brown";
    about.style.fontSize = "25px";
    about.style.border= "15px";
    about.style.borderStyle= "ridge";
    about.style.borderColor= "brown";
    about.style.backgroundColor = "rgba(250, 235, 215, 0.500)";
    about.style.padding = "150px";
    content.appendChild(about);
}