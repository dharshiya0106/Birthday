// ======================================
// Kutty Samantha Wishes
// Project Tower × Complan V3
// Part 1
// ======================================

// ===============================
// Pages
// ===============================

const pages = document.querySelectorAll(".page");

function openPage(pageId){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    // Birthday animation
    if(pageId==="birthday"){

        birthdayElement.innerHTML="";
        textIndex=0;
        typeBirthday();

        startConfetti();

    }

}

// ===============================
// Background Music
// ===============================

const music=document.getElementById("bgMusic");

const startBtn=document.getElementById("startBtn");

function fadeMusic(){

    music.volume=0;

    let volume=0;

    let fade=setInterval(()=>{

        if(volume<1){

            volume+=0.05;

            music.volume=volume;

        }else{

            clearInterval(fade);

        }

    },200);

}

startBtn.addEventListener("click",()=>{

    music.play();

    fadeMusic();

    openPage("login");

});

// ===============================
// Login
// ===============================

const surpriseBtn=document.getElementById("surpriseBtn");

const username=document.getElementById("username");

const password=document.getElementById("password");

const error=document.getElementById("error");

surpriseBtn.addEventListener("click",()=>{

    if(
        username.value==="Shiyam" &&
        password.value==="26/07/2005"
    ){

        openPage("birthday");

    }

    else{

        error.innerHTML=
        "Wrong Details 😅 Try Again ❤️";

    }

});

// ===============================
// Birthday Typing
// ===============================

const birthdayText=
"🎂 Happy Birthday Shiyamuuu 🎂";

const birthdayElement=
document.getElementById("birthdayText");

let textIndex=0;

function typeBirthday(){

    if(textIndex<birthdayText.length){

        birthdayElement.innerHTML+=
        birthdayText.charAt(textIndex);

        textIndex++;

        setTimeout(typeBirthday,150);

    }

}

// ===============================
// Next Buttons
// ===============================

const nextButtons=
document.querySelectorAll(".next");

let currentPage=0;

nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(currentPage===0){

            openPage("journey");

            currentPage++;

        }

        else if(currentPage===1){

            openPage("cakePage");

            currentPage++;

        }

        else if(currentPage===2){

            openPage("final");

            currentPage++;

        }

    });

});
// ===============================
// Friendship Story Loader
// ===============================

const story = document.getElementById("story");

fetch("story.txt")
.then(response => response.text())
.then(data=>{

    let paragraphs=data.split("\n\n");

    story.innerHTML="";

    paragraphs.forEach((text,index)=>{

        setTimeout(()=>{

            let p=document.createElement("p");

            p.innerText=text;

            story.appendChild(p);

        },index*700);

    });

})
.catch(()=>{

    story.innerHTML=
    "Unable to load memories ❤️";

});

// ===============================
// Confetti
// ===============================

const canvas=document.getElementById("confetti");

const ctx=canvas.getContext("2d");

function resizeCanvas(){

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

let pieces=[];

function createConfetti(){

    pieces=[];

    for(let i=0;i<150;i++){

        pieces.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height-canvas.height,

            size:Math.random()*8+4,

            speed:Math.random()*3+2,

            angle:Math.random()*360

        });

    }

}

function drawConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    pieces.forEach(p=>{

        ctx.fillStyle="#38bdf8";

        ctx.fillRect(

            p.x,

            p.y,

            p.size,

            p.size

        );

        p.y+=p.speed;

        p.x+=Math.sin(p.angle)*2;

        if(p.y>canvas.height){

            p.y=-20;

        }

    });

    requestAnimationFrame(drawConfetti);

}

function startConfetti(){

    createConfetti();

    drawConfetti();

}

// ===============================
// Fireworks
// ===============================

const fireCanvas=document.getElementById("fireworks");

const fireCtx=fireCanvas.getContext("2d");

function resizeFireworks(){

    fireCanvas.width=window.innerWidth;

    fireCanvas.height=window.innerHeight;

}

resizeFireworks();

window.addEventListener("resize",resizeFireworks);

let particles=[];

function createFirework(){

    let x=Math.random()*fireCanvas.width;

    let y=Math.random()*(fireCanvas.height/2);

    for(let i=0;i<60;i++){

        particles.push({

            x:x,

            y:y,

            dx:(Math.random()-0.5)*8,

            dy:(Math.random()-0.5)*8,

            life:100

        });

    }

}

function animateFireworks(){

    fireCtx.clearRect(

        0,

        0,

        fireCanvas.width,

        fireCanvas.height

    );

    particles.forEach((p,index)=>{

        fireCtx.beginPath();

        fireCtx.arc(

            p.x,

            p.y,

            3,

            0,

            Math.PI*2

        );

        fireCtx.fillStyle=
        `hsl(${Math.random()*360},100%,60%)`;

        fireCtx.fill();

        p.x+=p.dx;

        p.y+=p.dy;

        p.life--;

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

function startFireworks(){

    setInterval(createFirework,800);

}
// ===============================
// Cake Animation
// ===============================

function blowCandle(){

    const flame=document.getElementById("flame");
    const wish=document.getElementById("wishText");

    flame.style.display="none";

    wish.innerHTML=`
    🎉 Happy Birthday Shiyamuuu ❤️<br><br>
    Make a Wish... ✨
    `;

    startFireworks();

    startConfetti();

    setTimeout(()=>{

        openPage("final");

    },4000);

}

// ===============================
// Final Hidden Message
// ===============================

const finalWish=document.getElementById("finalWish");

const hiddenMessage=document.getElementById("hiddenMessage");

finalWish.addEventListener("click",()=>{

    hiddenMessage.classList.add("show");

    hiddenMessage.innerHTML=`

<h2>❤️Enna vittu eppothum poiratha ipdiye namma frnds ah irupom 🥹❤️</h2>

<p>
Happy Birthday Shiyam... 🥳🎂❤️
</p>

<p>
Thank you for every smile... 😊❤️
</p>

<p>
Thank you for every roast... 😂🤍
</p>

<p>
Thank you for every memory... 📸✨
</p>

<p>
Thank you for every support... 🫂❤️
</p>

<p>
Thank you for healing me when I needed someone the most... 🥹🤍
</p>

<h2>
🗼 Forever Nee En Tower ❤️
🥛 Forever Naa Un Complan 🤍
</h2>




`;

});

// ===============================
// Replay Button
// ===============================

const replay=document.getElementById("replayBtn");

if(replay){

    replay.addEventListener("click",()=>{

        location.reload();

    });

}

// ===============================
// Floating Hearts Animation Delay
// ===============================

const hearts=document.querySelectorAll(".hearts span");

hearts.forEach((heart,index)=>{

    heart.style.animationDelay=(index*1.2)+"s";

});

// ===============================
// End of Part 3
// ===============================
// ======================================
// Project Tower × Complan
// Part 4 (Final)
// ======================================

// ===============================
// Smooth Fade Between Pages
// ===============================

pages.forEach(page => {

    page.style.transition = "opacity .8s ease, transform .8s ease";

});

// ===============================
// Shooting Stars
// ===============================

function createStar(){

    const star=document.createElement("div");

    star.className="shootingStar";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*200+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2500);

}

setInterval(createStar,4000);

// ===============================
// Music Loop
// ===============================

if(music){

    music.addEventListener("ended",()=>{

        music.currentTime=0;

        music.play();

    });

}

// ===============================
// Mobile Resize
// ===============================

window.addEventListener("resize",()=>{

    if(canvas){

        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;

    }

    if(fireCanvas){

        fireCanvas.width=window.innerWidth;
        fireCanvas.height=window.innerHeight;

    }

});

// ===============================
// Welcome Message
// ===============================

console.log("%c❤️ Happy Birthday Shiyamuuu ❤️",
"font-size:22px;color:#38bdf8;font-weight:bold;");

console.log("%cForever Tower 🗼 & Complan 🥛",
"font-size:18px;color:#60a5fa;");

// ===============================
// End
// ===============================

console.log("Project Tower × Complan Loaded Successfully 💙");
// ===============================
// Final Photo Slideshow
// ===============================

const finalPhoto = document.querySelector(".photo");

const photoList = [
    "assets/image/pho 1.jpeg",
    "assets/image/pho 2.jpeg",
    "assets/image/pho 3.jpeg",
    "assets/image/pho 4.jpeg",
    "assets/image/pho 5.jpeg",
    "assets/image/pho 6.jpeg",
    "assets/image/pho 7.jpeg",
    "assets/image/pho 8.jpeg",
    "assets/image/pho 9.jpeg"
];

let photoIndex = 0;

setInterval(() => {

    if(document.getElementById("final").classList.contains("active")){

        photoIndex++;

        if(photoIndex >= photoList.length){
            photoIndex = 0;
        }

        finalPhoto.src = photoList[photoIndex];

    }

}, 3000);
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

giftBox.addEventListener("click", () => {

    giftBox.innerHTML = "💙";

    giftMessage.style.display = "block";

    giftMessage.innerHTML =
    "🎁 My biggest gift is our friendship. Happy Birthday Tower! 🗼❤️";

});
