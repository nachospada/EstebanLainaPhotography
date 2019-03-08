// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuIn = document.querySelector('.menu-in');
const menuItems = document.querySelector('.menu-items');

// Set Initial State of the Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('mouseover', hoverOn);
menuBtn.addEventListener('mouseout', hoverOff);

function hoverOn() {
    document.getElementsByClassName('btn-line')[0].style.background = "#555";
    document.getElementsByClassName('btn-line')[1].style.background = "#555";
    document.getElementsByClassName('btn-line')[2].style.background = "#555";
}

function hoverOff() {
    document.getElementsByClassName('btn-line')[0].style.background = "#000";
    document.getElementsByClassName('btn-line')[1].style.background = "#000";
    document.getElementsByClassName('btn-line')[2].style.background = "#000";
}


function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close'); 
        menu.classList.add('show'); 
        menuIn.classList.add('show'); 
        menuItems.classList.add('show');
        
//        dateDisplay.style.opacity = "1";
//        dateDisplay.style.transform = "translate3d(-80%,0,0)";
        
        //SET MENU STATE
        showMenu = true; 
        
        document.getElementsByClassName('btn-line')[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        document.getElementsByClassName('btn-line')[1].style.opacity = "0";
        document.getElementsByClassName('btn-line')[2].style.transform = "rotate(-45deg) translate(6px, -7px)"; 

    } else {
        menuBtn.classList.remove('close'); 
        menu.classList.remove('show'); 
        menuIn.classList.remove('show');
        menuItems.classList.remove('show');
        
//        dateDisplay.style.opacity = "0";
//        dateDisplay.style.transform = "translate3d(0,0,0)";
        
        //SET MENU STATE
        showMenu = false;
        
        document.getElementsByClassName('btn-line')[0].style.transform = "none";
        document.getElementsByClassName('btn-line')[1].style.opacity = "1";
        document.getElementsByClassName('btn-line')[2].style.transform = "none";   
        
    }
}