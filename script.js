// ==========================================
// DATE PROPOSAL WEBSITE
// SCRIPT.JS - PART 1
// ==========================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartContainer = document.getElementById("heartContainer");
const card = document.querySelector(".card");

// ==========================================
// MOVE NO BUTTON
// ==========================================

function moveNoButton(){

    const cardRect = card.getBoundingClientRect();

    const maxX = cardRect.width - noBtn.offsetWidth - 20;

    const maxY = cardRect.height - noBtn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);

    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";

    noBtn.style.top = randomY + "px";

}

// ==========================================
// CURSOR DETECTION
// ==========================================

document.addEventListener("mousemove",(e)=>{

    const rect = noBtn.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;

    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(

        Math.pow(e.clientX-centerX,2)+
        Math.pow(e.clientY-centerY,2)

    );

    if(distance<120){

        moveNoButton();

    }

});

// ==========================================
// MOBILE TOUCH
// ==========================================

noBtn.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moveNoButton();

});

// ==========================================
// BUTTON EFFECT
// ==========================================

yesBtn.addEventListener("click",()=>{

    yesBtn.style.transform="scale(.95)";

    setTimeout(()=>{

        yesBtn.style.transform="scale(1)";

    },150);

});
// ==========================================
// HEART RAIN
// SCRIPT.JS - PART 2
// ==========================================

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animationDuration=(3+Math.random()*3)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

// ==========================================
// HEART SHOWER
// ==========================================

function startHeartRain(){

    for(let i=0;i<80;i++){

        setTimeout(()=>{

            createHeart();

        },i*60);

    }

}

// ==========================================
// YES BUTTON
// ==========================================

yesBtn.addEventListener("click",()=>{

    startHeartRain();

    setTimeout(()=>{

        showSuccess();

    },1800);

});

// ==========================================
// SUCCESS PAGE
// ==========================================

function showSuccess(){

    document.body.innerHTML=`

    <div class="successPage">

        <div class="successHeart">
            ❤️
        </div>

        <h1>
            Yayyyyy!! 🥳
        </h1>

        <p>

            Thank You ❤️

        </p>

    </div>

    `;

}
// ==========================================
// SCRIPT.JS - PART 3 (FINAL)
// ==========================================

// ---------- YES Button Pulse ----------

setInterval(() => {

    yesBtn.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 1200
        }
    );

}, 1800);

// ---------- Smart Escape ----------

let escapeSpeed = 120;

document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const x = rect.left + rect.width / 2;

    const y = rect.top + rect.height / 2;

    const distance = Math.hypot(

        e.clientX - x,

        e.clientY - y

    );

    if (distance < escapeSpeed) {

        moveNoButton();

        escapeSpeed += 5;

        if (escapeSpeed > 220) {

            escapeSpeed = 220;

        }

    }

});

// ---------- Mobile ----------

document.addEventListener("touchmove", () => {

    moveNoButton();

});

// ---------- Confetti ----------

function confetti() {

    for (let i = 0; i < 120; i++) {

        const c = document.createElement("div");

        c.innerHTML = ["🎉", "💖", "✨", "💕", "🌸"][Math.floor(Math.random() * 5)];

        c.style.position = "fixed";

        c.style.left = Math.random() * 100 + "vw";

        c.style.top = "-20px";

        c.style.fontSize = (18 + Math.random() * 15) + "px";

        c.style.pointerEvents = "none";

        c.style.transition = "4s linear";

        c.style.zIndex = "99999";

        document.body.appendChild(c);

        setTimeout(() => {

            c.style.top = "110vh";

            c.style.transform = "rotate(720deg)";

        }, 50);

        setTimeout(() => {

            c.remove();

        }, 4500);

    }

}

// ---------- Add Confetti ----------

yesBtn.addEventListener("click", () => {

    confetti();

});

// ---------- Disable Right Click ----------

document.addEventListener("contextmenu", (e) => {

    e.preventDefault();

});

// ---------- Disable Text Select ----------

document.addEventListener("selectstart", (e) => {

    e.preventDefault();

});

// ---------- Console Message ----------

console.log("❤️ Date Proposal Website Loaded ❤️");

