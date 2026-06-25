let intro = document.getElementById("intro-screen");
let home = document.getElementById("main-home");

// Splash screen (only on home page)
if (intro && home) {

    if (!sessionStorage.getItem("splashShown")) {

        sessionStorage.setItem("splashShown", "true");

        setTimeout(() => {

            intro.style.opacity = "0";

            setTimeout(() => {

                intro.style.display = "none";
home.style.display = "block";

            }, 1000);

        }, 3000);

    } else {

       intro.style.display = "none";
home.style.display = "block";

    }

}

function toggleMenu(){

    let menu = document.getElementById("dropdown-menu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }

}

const spotlightData = [
{
image:"kiro.jpeg",
tag:"register now",
title:"FREEFIREXIPL SEASON 11",
date:"Registration Opens Soon",
text:"Bigger battles, stronger teams, exciting matches.",
link:"#"
},
{
image:"banner2.jpg",
tag:"UPDATE",
title:"TOURNAMENT SCHEDULE",
date:"Coming This Week",
text:"Official match schedule releasing shortly.",
link:"#"
},
{
image:"banner3.jpg",
tag:"SPECIAL EVENT",
date:"Limited Event",
title:"EXCLUSIVE REWARDS",
text:"Play and win exclusive tournament rewards.",
link:"#"
}
];

let currentSlide = 0;

function showSlide(){
    const item = spotlightData[currentSlide];

    document.getElementById("spotlightImage").src = item.image;
    document.getElementById("spotlightTag").textContent = item.tag;
    document.getElementById("spotlightTitle").textContent = item.title;
    document.getElementById("spotlightDate").textContent = item.date;
    document.getElementById("spotlightText").textContent = item.text;
    document.getElementById("spotlightBanner").href = item.link;
}

function nextSlide(){
    currentSlide++;
    if(currentSlide >= spotlightData.length){
        currentSlide = 0;
    }
    showSlide();
}

function prevSlide(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = spotlightData.length - 1;
    }
    showSlide();
}

setInterval(nextSlide, 4000);

let startX = 0;

const card = document.querySelector('.spotlight-card');

card.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

card.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        nextSlide(); // swipe left
    }

    if(endX - startX > 50){
        prevSlide(); // swipe right
    }
});