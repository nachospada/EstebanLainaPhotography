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
    document.getElementsByClassName('btn-line')[0].style.background = "#666";
    document.getElementsByClassName('btn-line')[1].style.background = "#666";
    document.getElementsByClassName('btn-line')[2].style.background = "#666";
}

function hoverOff() {
    if($(document).scrollTop()+50<= $('.home').innerHeight()){    
        document.getElementsByClassName('btn-line')[0].style.background = "#000";
        document.getElementsByClassName('btn-line')[1].style.background = "#000";
        document.getElementsByClassName('btn-line')[2].style.background = "#000";
    } else if ($(document).scrollTop()+50>= $('.home').innerHeight() && !showMenu) {
        // LINES GO WHITE
        document.getElementsByClassName('btn-line')[0].style.background = "#fff";
        document.getElementsByClassName('btn-line')[1].style.background = "#fff";
        document.getElementsByClassName('btn-line')[2].style.background = "#fff";
    } else {
        document.getElementsByClassName('btn-line')[0].style.background = "#000";
        document.getElementsByClassName('btn-line')[1].style.background = "#000";
        document.getElementsByClassName('btn-line')[2].style.background = "#000";
    }  
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
        
        document.getElementsByClassName('btn-line')[0].style.background = "#000";
        document.getElementsByClassName('btn-line')[1].style.background = "#000";
        document.getElementsByClassName('btn-line')[2].style.background = "#000";

    } else {
        menuBtn.classList.remove('close'); 
        menu.classList.remove('show'); 
        menuIn.classList.remove('show');
        menuItems.classList.remove('show');
        
        hoverOff();
        
        //SET MENU STATE
        showMenu = false;
        
        document.getElementsByClassName('btn-line')[0].style.transform = "none";
        document.getElementsByClassName('btn-line')[1].style.opacity = "1";
        document.getElementsByClassName('btn-line')[2].style.transform = "none";   
        
    }
}

$(document).ready(function(){
    $(document).on("scroll", onScroll);
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        
        if($(document).scrollTop() + 50 >= $('.home').innerHeight()  && !showMenu) {
            document.getElementsByClassName('btn-line')[0].style.background = "#fff";
            document.getElementsByClassName('btn-line')[1].style.background = "#fff";
            document.getElementsByClassName('btn-line')[2].style.background = "#fff";
        } else {
            hoverOff();
        }
        

//        $('#navbar a').each(function () {
//            var currLink = $(this);
//            var refElement = $(currLink.attr("href"));        
//            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                $('#navbar ul li a').removeClass("active");
//                currLink.addClass("active");
//            }
//            else{
//                currLink.removeClass("active");
//            }
//        });
//        console.log($(document).scrollTop());
        
        if ($(document).scrollTop() + 10 >= $('.home').innerHeight()) {
    console.log('OVER');
} else {
    console.log('NOT YET');
}
    }
}); 


//
//console.log($('.home').innerHeight());
//console.log($(document).scrollTop() + 10);

