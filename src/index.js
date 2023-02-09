const content = document.getElementById("content");
content.setAttribute("id", "IdContent");

const displayNav = () => {
    const navbar = document.createElement("div");
    navbar.classList.add("brown", "nav-bar");
    content.appendChild(navbar);

        const loggo = document.createElement("img");
        loggo.setAttribute("src", "./loggo.png");
        loggo.setAttribute("width", "45em");
        loggo.setAttribute("height", "45em");
        loggo.setAttribute("id", "loggo");
        navbar.appendChild(loggo);
        loggo.classList.add("logo");

        const navElems = document.createElement("div");
        navbar.appendChild(navElems);
        navElems.innerHTML=`<ul>
        <li><a id="home" href="#home">Home</a></li>
        <li><a id="menu" href="#menu">Menu</a></li>
        <li><a id="about" href="#about">About</a></li>
        </ul>`
}
const displayMenu = () => {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menuId');
    content.appendChild(menu);

        const menuItem0 = document.createElement('div');
        menuItem0.classList.add('menuItem');
        menu.appendChild(menuItem0);

            const image0= document.createElement('img');
            image0.classList.add('image');
            image0.setAttribute('src', './images/mercimek.jpg');
            menuItem0.appendChild(image0);

            const text0 = document.createElement('p');
            text0.textContent = "Lentil Soup - 3 $";
            text0.classList.add('text');
            menuItem0.appendChild(text0);

        const menuItem1 = document.createElement('div');
        menuItem1.classList.add('menuItem');
        menu.appendChild(menuItem1);

            const image1= document.createElement('img');
            image1.classList.add('image');
            image1.setAttribute('src', './images/lahmacun.jpg');
            menuItem1.appendChild(image1);

            const text1 = document.createElement('p');
            text1.textContent = "Lahmacun - 4 $";
            text1.classList.add('text');
            menuItem1.appendChild(text1);


        const menuItem2 = document.createElement('div');
        menuItem2.classList.add('menuItem');
        menu.appendChild(menuItem2);

            const image2= document.createElement('img');
            image2.classList.add('image');
            image2.setAttribute('src', './images/doner.jpg');
            menuItem2.appendChild(image2);

            const text2 = document.createElement('p');
            text2.textContent = "Doner - 8 $";
            text2.classList.add('text');
            menuItem2.appendChild(text2);

        const menuItem3 = document.createElement('div');
        menuItem3.classList.add('menuItem');
        menu.appendChild(menuItem3);

            const image3= document.createElement('img');
            image3.classList.add('image');
            image3.setAttribute('src', './images/pide.jpg');
            menuItem3.appendChild(image3);

            const text3 = document.createElement('p');
            text3.textContent = "Pide - 10 $";
            text3.classList.add('text');
            menuItem3.appendChild(text3);

        const menuItem4 = document.createElement('div');
        menuItem4.classList.add('menuItem');
        menu.appendChild(menuItem4);

            const image4= document.createElement('img');
            image4.classList.add('image');
            image4.setAttribute(
                'src', './images/imambayildi.jpg');
            menuItem4.appendChild(image4);

            const text4 = document.createElement('p');
            text4.textContent = "Imam Bayildi - 5 $";
            text4.classList.add('text');
            menuItem4.appendChild(text4);

        const menuItem5 = document.createElement('div');
        menuItem5.classList.add('menuItem');
        menu.appendChild(menuItem5);

            const image5= document.createElement('img');
            image5.classList.add('image');
            image5.setAttribute(
                'src', './images/baklava.jpg');
            menuItem5.appendChild(image5);

            const text5 = document.createElement('p');
            text5.textContent = "Baklava - 6 $";
            text5.classList.add('text');
            menuItem5.appendChild(text5);
}
const navListeners = () => {
    const homeDOM = document.getElementById("home");
    homeDOM.addEventListener('click', function(){
        content.removeChild(content.firstElementChild);
        content.removeChild(content.firstElementChild);
        content.removeChild(content.firstElementChild);
        home();
    }
        );

    const loggo = document.getElementById("loggo");
    loggo.addEventListener('click', function(){
        content.removeChild(content.firstElementChild);
        content.removeChild(content.firstElementChild);
        content.removeChild(content.firstElementChild);
        home();
    }
        );

    const menuDOM = document.getElementById("menu");
    menuDOM.addEventListener('click', function(){
        content.removeChild(content.firstElementChild);
        content.removeChild(content.firstElementChild);
        content.removeChild(content.firstElementChild);
        menu();
    }
        );

    const aboutDOM = document.getElementById("about");
    aboutDOM.addEventListener('click', function(){
        content.removeChild(content.firstElementChild);
        content.removeChild(content.firstElementChild);
        content.removeChild(content.firstElementChild);
        about();
    }
        );
}
const displayFooter = () => {
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
const displayHome = () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'mainId');
    content.appendChild(main);

        const mainLeft = document.createElement('div');
        mainLeft.classList.add("mainLeft");
        
        main.appendChild(mainLeft);
            
            const mainLeftHeader = document.createElement('h1');
                mainLeftHeader.textContent= "Famous Turkish Restaurant" ;
                mainLeft.appendChild(mainLeftHeader);

                const mainLeftText = document.createElement('h3');
                mainLeftText.textContent="The Imperial Taste On Your Tongue!"
                mainLeftText.style.fontStyle = "italic";
                mainLeftText.style.color = "brown";
                mainLeftText.style.textAlign = "right";
                mainLeft.appendChild(mainLeftText);
                
                
                const bookBtn = document.createElement('button');
                bookBtn.classList.add('btn');
                bookBtn.textContent="Book Now!"
                mainLeft.appendChild(bookBtn);
                
        const mainRight = document.createElement('div');
        mainRight.classList.add("mainRight");
        main.appendChild(mainRight);          
}
const displayAbout = () => {
    const about = document.createElement('div');
    about.textContent="My restaurant page project is dedicated to promoting traditional Turkish food.";
    about.style.fontStyle = "italic";
    about.style.color = "brown";
    about.style.fontSize = "25px";
    about.style.backgroundColor = "rgba(250, 235, 215, 0.500)";
    about.style.padding = "150px";
    content.appendChild(about);
}

const home = () => {
    displayNav();
    displayHome();
    displayFooter();
    navListeners();
}

const menu = () => {
    displayNav();
    displayMenu();
    displayFooter();
    navListeners();
}

const about = () => {
    displayNav();
    displayAbout();
    displayFooter();
    navListeners();
}

home();
bora();
