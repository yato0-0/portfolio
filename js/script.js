"https://cdn.jsdelivr.net/npm/typed.js@2.0.12"



var typed = new Typed(".typing",{
    strings:[ "Web Devloper","  Programmer","  Cyber Enthusiast"," Photographer"],
    typeSpeed: 70,
    backSpeed: 60,
    loop:true
    });

const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let calcScrollValue = () =>{
    let scrollProgress = document.getElementById('progress');
    let progressValue = document.getElementById('progress_value');
    let pos = document.documentElement.scrollTop
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
    let scrollValue = Math.round((pos * 100)/calcHeight);

    if (pos > 10) {
        scrollProgress.style.display = "grid";
    } 
    else{
        scrollProgress.style.display = "none";
    }
    
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;