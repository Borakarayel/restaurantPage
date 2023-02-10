export const displayFooter = () => {
        const footer = document.createElement("div");
        footer.classList.add("brown", "footer");
        content.appendChild(footer);
    
            const footerContacts = document.createElement("div");
            footerContacts.innerHTML= 
            `<a href="https://github.com/Borakarayel" target="_blank">GitHub</a> / <a href="https://www.linkedin.com/in/borakarayel/" target="_blank">LinkedIn</a> / <a href = "mailto:m.bora.karayel@gmail.com" target="_blank">eMail me!</a>`;
    
            footer.appendChild(footerContacts);
    
            const footerLinks = document.createElement("p");
            footer.appendChild(footerLinks);
            footerLinks.innerHTML= 
            `<a href="https://www.freepik.com/author/kamranaydinov" target="_blank"> Images by KamranAydinov from Freepik</a>`;
    }