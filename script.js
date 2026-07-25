// ======================================
// Kutty Samantha Wishes
// Project Tower × Complan
// Final JavaScript
// ======================================


// Pages

const pages = document.querySelectorAll(".page");


function openPage(pageId){

    pages.forEach(page => {

        page.classList.remove("active");

    });


    document.getElementById(pageId)
    .classList.add("active");

}







// ======================================
// Music Start
// ======================================


const music = document.getElementById("bgMusic");

const startBtn = document.getElementById("startBtn");



function fadeMusic(){

    music.volume = 0;

    let volume = 0;


    let fade = setInterval(()=>{


        if(volume < 1){

            volume += 0.05;

            music.volume = volume;

        }

        else{

            clearInterval(fade);

        }


    },200);

}





startBtn.addEventListener("click",()=>{


    music.play();


    fadeMusic();


    openPage("login");


});








// ======================================
// Secret Login
// ======================================


const surpriseBtn =
document.getElementById("surpriseBtn");


const username =
document.getElementById("username");


const password =
document.getElementById("password");


const error =
document.getElementById("error");





surpriseBtn.addEventListener("click",()=>{


    if(
        username.value === "Shiyam" &&
        password.value === "26/07/2005"
    ){


        openPage("birthday");


    }

    else{


        error.innerHTML =
        "Wrong details 😅 Try again ❤️";


    }


});








// ======================================
// Next Buttons
// ======================================


const nextButtons =
document.querySelectorAll(".next");



let currentPage = 0;



nextButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        if(currentPage === 0){


            openPage("journey");


            currentPage++;


        }


        else if(currentPage === 1){


            openPage("final");


            currentPage++;


        }



    });


});









// ======================================
// Full Friendship Story Loading
// ======================================


const story =
document.getElementById("story");



fetch("story.txt")


.then(response => response.text())


.then(data =>{


    let paragraphs =
    data.split("\n\n");


    story.innerHTML = "";



    paragraphs.forEach((text,index)=>{


        setTimeout(()=>{


            let p =
            document.createElement("p");


            p.innerText = text;


            story.appendChild(p);



        }, index * 700);



    });


})


.catch(()=>{


    story.innerHTML =
    "Unable to load memories ❤️";


});
// ======================================
// Birthday Typing Effect
// ======================================


const birthdayText =
"🎂 Happy Birthday Shiyamuuu 🎂";


const birthdayElement =
document.getElementById("birthdayText");


let textIndex = 0;



function typeBirthday(){


    if(textIndex < birthdayText.length){


        birthdayElement.innerHTML +=
        birthdayText.charAt(textIndex);


        textIndex++;


        setTimeout(typeBirthday,150);


    }


}





// Start typing when birthday page opens

const oldOpenPage = openPage;


openPage = function(pageId){


    oldOpenPage(pageId);



    if(pageId === "birthday"){


        birthdayElement.innerHTML="";

        textIndex=0;

        typeBirthday();


    }


}
// ======================================
// Confetti Effect
// ======================================


const canvas =
document.getElementById("confetti");


const ctx =
canvas.getContext("2d");


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



let pieces = [];



function createConfetti(){


    pieces=[];


    for(let i=0;i<150;i++){


        pieces.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height- canvas.height,

            size:Math.random()*8+4,

            speed:Math.random()*3+2,

            angle:Math.random()*360

        });


    }

}



function drawConfetti(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    pieces.forEach(p=>{


        ctx.beginPath();


        ctx.fillStyle =
        "#38bdf8";


        ctx.fillRect(
            p.x,
            p.y,
            p.size,
            p.size
        );


        p.y += p.speed;

        p.x += Math.sin(p.angle)*2;


        if(p.y > canvas.height){

            p.y=-20;

        }


    });


    requestAnimationFrame(drawConfetti);


}




function startConfetti(){

    createConfetti();

    drawConfetti();

}





// Birthday page open aagumbodhu confetti

const oldOpenPage2 = openPage;


openPage = function(pageId){


    oldOpenPage2(pageId);



    if(pageId === "birthday"){

        startConfetti();

    }


}
// ======================================
// Final Hidden Message
// ======================================


const finalWish =
document.getElementById("finalWish");


const hiddenMessage =
document.getElementById("hiddenMessage");



finalWish.addEventListener("click",()=>{


    hiddenMessage.classList.add("show");


    hiddenMessage.innerHTML = `

    <h2>
    ❤️ Dear Shiyamuuu ❤️
    </h2>


    <p>
    Life evlo change aanaalum...
    namma friendship mattum change aaga koodadhu. ♾️
    </p>


    <p>
    Thank you for being my best friend,
    my support system and my Tower 🗼❤️
    </p>


    <h2>
    🥛 Forever naa un Complan 🤍
    </h2>

    `;


});