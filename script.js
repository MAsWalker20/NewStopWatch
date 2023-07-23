const stopwatchTag = document.getElementById("stopwatch");
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];
const milisecondsButtonTag = document.getElementById("miliseconds");



let sec = 0 , min = 0 , hr = 0, miliseconds = 0 ;

const startTime = () => {
    sec += 1 ;
    if (sec === 60) {
        sec = 0;
        min += 1;
        if (min === 60) {
            min = 0; 
            hr += 1;
        }
    }
    const hourText = hr < 10 ? "0" + hr.toString() : hr;
    const secondText = sec < 10 ? "0" + sec.toString() : sec;
    const mintuesText = min < 10 ? "0" + min.toString() : min;
    stopwatchTag.textContent = hourText + ":" + mintuesText + ":" + secondText;

};

const minisecond = () => {
    miliseconds += 100;
    if (miliseconds === 10000) {
        miliseconds = 0;
        sec += 1;
        if (sec === 60){
            sec = 0;
            min += 1;
            if (min === 60) {
                min = 0;
                hr += 1;
            }
        }
    }
    const hourText = hr < 10 ? "0" + hr.toString() : hr;
    const secondText = sec < 10 ? "0" + sec.toString() : sec;
    const mintuesText = min < 10 ? "0" + min.toString() : min;
    stopwatchTag.textContent = hourText + ":" + mintuesText + ":" + secondText;
    milisecondsButtonTag.textContent = miliseconds;
};

let setIntervalid

startButtonTag.addEventListener("click", () => {
    setIntervalid = setInterval(minisecond,10);
    stopwatchTag.style.color = "green";
    stopwatchTag.style.transition = "1s";
    milisecondsButtonTag.style.color = "red";
    milisecondsButtonTag.style.transition = "1s";
});


pauseButtonTag.addEventListener("click", () => {
    clearInterval(setIntervalid);
    milisecondsButtonTag.style.color = "white";
    milisecondsButtonTag.style.transition = "1s";
    stopwatchTag.style.color = "white";
    milisecondsButtonTag.style.transition = "1s";
});



restartButtonTag.addEventListener("click", () => {
    clearInterval(setIntervalid);
    sec = 0;
    min = 0;
    hr = 0;
    miliseconds = 0;
    milisecondsButtonTag.textContent = "000";
    stopwatchTag.textContent = "00:00:00";
    milisecondsButtonTag.style.color = "white";
    milisecondsButtonTag.style.transition = "1s";
    stopwatchTag.style.color = "yellow";
    milisecondsButtonTag.style.transition = "1s";

});


