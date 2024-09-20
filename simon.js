let gameseq=[];
let userseq=[];
let started=false;
let level=0;

let h2=document.querySelector("h2");
let btns=["b1","b2","b3","b4"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started now");
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    

    btnflash(randbtn);
}

function check(idx){
    
    if(userseq[idx]==gameseq[idx]){
        //same hoga to
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b> ${level} </b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },500)
        reset();
    }
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}

function btnPress(){
    let btn= this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);
    

}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}