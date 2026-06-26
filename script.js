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

document.addEventListener("DOMContentLoaded", () => {

const spotlightData = [
{
image:"kiro.jpeg",
tag:"LIVE NOW",
title:"FREEFIREXIPL SEASON 11",
date:"Registrations Are Live Now",
text:"Bigger battles, stronger teams, exciting matches.",
link:"register.html",
tags:["🏆 Tournament","🔥 Season 11 ","🎮 Free Fire"]
},
{
image:"HY.png",
tag:"UPDATE",
title:"SEASON - 11 AUCTIONS",
date:"27TH JUNE",
text:"1000 rupees prizeppool",
link:"HY.png",
tags:["📢 Update","🔥 Season 11 ","🎯 auctions"]
},
{
image:"srh.jpeg",
tag:"Sun Risers Hyderabad",
title:"TEAM SRH",
date:"CAPTAIN BILLA",
text:"RISE WITH FIRE",
link:"srh.jpeg",
tags:["👑 IPL CAPTAIN ","🔥 HIGHEST BIDDER ","SRH","🎯 JOIN US "],
special:true
},
{
image:"RCB.jpeg",
tag:"Royal Challengers Bangalore",
title:"TEAM RCB",
date:"CAPTAIN NARESH",
text:"PLAY BOLD",
link:"RCB.jpeg",
tags:["👑 IPL CAPTAIN","🔥RCB", "🎯 JOIN US"],
special:true
},

{
image:"csk.jpeg",
tag:"Chennai Super Kings",
title:"TEAM CSK",
date:"CAPTAIN ABHI",
text:"WHISTLE PODU",
link:"csk.jpeg",
tags:["👑 IPL CAPTAIN","🔥CSK", "🎯 JOIN US"],
special:true
},
{
image:"kkr.jpeg",
tag:"Kolkata Knight Riders",
title:"TEAM KKR",
date:"CAPTAIN VENU",
text:"CHASE THE VICTORY, OWN THE NIGHT",
link:"kkr.jpeg",
tags:["👑 IPL CAPTAIN","🟣 KKR DOMINATION","🎯 JOIN US"],
special:true
},
{
image:"dc.jpeg",
tag:"Delhi Capitals",
title:"TEAM DC",
date:"CAPTAIN RAFNA",
text:"FIGHT HARD, WIN BIG",
link:"dc.jpeg",
tags:["👑 IPL CAPTAIN","🔷 DC ATTACK","🎯 JOIN US"],
special:true
},
{
image:"RR.jpeg",
tag:"Rajasthan Royals",
title:"TEAM RR",
date:"CAPTAIN PAVAN",
text:"ROYAL BLOOD, FEARLESS GAME",
link:"RR.jpeg",
tags:["👑 IPL CAPTAIN","💗 RR SQUAD","🎯 JOIN US"],
special:true
},
{
image:"MI.jpeg",
tag:"Mumbai Indians",
title:"TEAM MI",
date:"CAPTAIN HARSHA",
text:"ONE FAMILY, ONE GOAL",
link:"MI.jpeg",
tags:["👑 IPL CAPTAIN","🔵 MI POWER","🎯 JOIN US"],
special:true
},
{
image:"pbks.jpeg",
tag:"Punjab Kings",
title:"TEAM PBKS",
date:"CAPTAIN LOKI",
text:"POWER HITTERS READY",
link:"pbks.jpeg",
tags:["👑 IPL CAPTAIN","❤️ PBKS FIRE","🎯 JOIN US"],
special:true
},


];

let currentSlide = 0;

const imageBox = document.querySelector(".spotlight-image");

const spotlightCard = document.querySelector(".spotlight-card");

function showSlide(){
    const item = spotlightData[currentSlide];

    document.getElementById("spotlightImage").src = item.image;

    spotlightCard.classList.remove("big-card");

if(item.special){
    spotlightCard.classList.add("big-card");
}
    document.getElementById("spotlightTag").textContent = item.tag;
    document.getElementById("spotlightTitle").textContent = item.title;
    document.getElementById("spotlightDate").textContent = item.date;
    document.getElementById("spotlightText").textContent = item.text;
    document.getElementById("spotlightBanner").href = item.link;

    // TAGS
    const tagContainer = document.getElementById("spotlightTags");
    tagContainer.innerHTML = item.tags
        .map(tag => `<span>${tag}</span>`)
        .join("");

 
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % spotlightData.length;
    showSlide();
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + spotlightData.length) % spotlightData.length;
    showSlide();
}

// Auto slide
setInterval(nextSlide, 4000);

// Swipe
let startX = 0;
const card = document.querySelector('.spotlight-card');

card.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

card.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        nextSlide();
    }

    if(endX - startX > 50){
        prevSlide();
    }
});

// Show first slide
showSlide();

});

