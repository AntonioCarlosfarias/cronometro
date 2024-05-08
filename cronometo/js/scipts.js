const minutesEl= document.querySelector("#minutes");
const secondsEl= document.querySelector("#seconds");
const milisecondsEl= document.querySelector("#miliseconds");
const startBtn= document.querySelector("#startBtn");
const pasueBtn= document.querySelector("#pauseBtn");
const resumeBtn= document.querySelector("#resumeBtn");
const resetBtn=document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds= 0;
let miliseconds=0;
let isPaused= false;

startBtn.addEventListener("click", startTimer);
pasueBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click" , resetTimer);


function startTimer(){
    interval= setInterval(()=>{
      
        if(!isPaused){
            miliseconds+=10;

            if (miliseconds===1000) {
                seconds++;
                miliseconds=0;
            }

            if (seconds===60) {
                minutes++;
                seconds=0;
            }

            minutesEl.textContent=formatTimer (minutes);
            secondsEl.textContent=formatTimer(seconds);
            milisecondsEl.textContent=formatMiliseconds(miliseconds);
        }
          
    },10);
  startBtn.style.display= "none";
  pasueBtn.style.display= "block";
};

function pauseTimer () {
    isPaused = true
    pasueBtn.style.display = " none";
    resumeBtn.style.display= "block";
};

function resumeTimer() {
    isPaused= false ;
    pasueBtn.style.display="block";
    resumeBtn.style.display="none"
};

function resetTimer () {
    clearInterval(interval);
    isPaused = false
    minutes=0;
    seconds=0;
    miliseconds=0;

    minutesEl.textContent="00"
    secondsEl.textContent="00"
    milisecondsEl.textContent="000"

    pasueBtn.style.display="none";
    startBtn.style.display="block";
    resumeBtn.style.display="none";
}

function formatTimer(time){
    return time < 10 ? `0${time}` : time;
};

function formatMiliseconds(time) {
    return time <100 ?  `0${time}`.padStart(2 , "0") : time;
}

