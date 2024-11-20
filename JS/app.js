let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

// initial level setup;


document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
    
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash")
    }, 250);
};

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    // random btn choose
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
};

function checkAns (idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerText = `Game Over! Press any key to restart`;
    }
}

function btnPress () {
    let btn = this;
    console.log(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
};
