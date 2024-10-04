const getaudioscreen = document.getElementById("audioscreen");
const playbtn = document.getElementById("play"),
  prevbtn = document.getElementById("prev"),
  nextbtn = document.getElementById("next"),
  stopbtn = document.getElementById("stop");

const getprogress = document.getElementById("progress"),
  getprogressbar = document.getElementById("progress-bar");
const getvolprogress = document.getElementById("volumeprogress");
const getdisplaytime = document.getElementById("displaytime");

const audios = ["sample1", "sample2", "sample3"];

let currentidx = 0;
// console.log(audios[currentidx]); //sample1

// loadaudio(audios[currentidx]);

function loadaudio(audio) {
  getaudioscreen.src = `./source/${audio}.mp3`;
}

function playaudio() {
  playbtn.querySelector("i.fas").classList.remove("fa-play");
  playbtn.querySelector("i.fas").classList.add("fa-pause");

  getaudioscreen.play(); //default function
}

function pauseaudio() {
  playbtn.querySelector("i.fas").classList.add("fa-play");
  playbtn.querySelector("i.fas").classList.remove("fa-pause");

  getaudioscreen.pause(); //default function
}

function playandpauseaudio() {
  //default key work for audio/video
  if (getaudioscreen.paused) {
    getaudioscreen.play();
  } else {
    getaudioscreen.pause();
  }
}

function nextaudio(){
    currentidx++;

    if(currentidx > audios.length-1){
        currentidx = 0;
    }
    // console.log(currentidx);  //0 1 2 0 1 2

    loadaudio(audios[currentidx]);
    playaudio();
}

function prevaudio(){
    currentidx--;

    if(currentidx > 0){
        currentidx = audios.length-1;
    }
    // console.log(currentidx); //2 1 0 2 1 0

    loadaudio(audios[currentidx]);
    playaudio();
}

function updateprogress(e){
    // console.log(e.target);
    // console.console(e.target.duration);
    // console.console(e.target.currentTime);

    // const getduration = e.target.duration;
    // const getcurrenttime = e.target.currentTime;

    // console.log(getduration,getcurrenttime);

    // const {duration,curretTime} = e.target;
    // console.log(duration,curretTime);


    const {duration} = e.target;
    const {currentTime} = e.target;
    console.log(duration,currentTime);

    if(currentTime == 0){
        getprogressbar.style.width = "0%";
    }else{
        const progresspercent = (currentTime/duration)*100;
        // console.log(progresspercent);

        getprogressbar.style.width = `${progresspercent}%`;
    }

    //forward
    // const mins = Math.floor(currentTime/60);
    // const secs = Math.floor(currentTime%60);

    //backward
    const mins = Math.floor((duration-currentTime)/60);
    const secs = Math.floor((duration-currentTime)%60);
    // console.log(typeof mins); //number

    //padstart ka string and concat number nat ma use lo ya 
    const minutevalue = mins.toString().padStart(2,'0');
    // console.log(minutevalue);

    const secondvalue = secs.toString().padStart(2,'0');

    getdisplaytime.innerHTML = `${minutevalue}:${secondvalue}`;



}

function stopaudio(){
    getaudioscreen.currentTime = 0;
    getprogressbar.style.width = '0%';

    pauseaudio();
}

function volumecontrol(){
    // console.log(getvolprogress.value);
    // console.log(getvolprogress.volume); //1

    //volume default key from audio/video
    getaudioscreen.volume = getvolprogress.value/100;
}

function progressaudioclick(e){
    // console.log(e.target);c
    // console.log(this);

    const width = this.clientWidth;
    console.log(width);

    const clickx = e.offsetX;
    console.log(clickx);

    const getduration = getduration.duration;
    console.log(getduration);

    getaudioscreen.currentTime = (clickx/width)*getduration;
    // console.log(currentTime);
}

getaudioscreen.addEventListener('timeupdate',updateprogress);
getaudioscreen.addEventListener('play',playaudio);
getaudioscreen.addEventListener('pause',pauseaudio);


playbtn.addEventListener('click',playandpauseaudio);
nextbtn.addEventListener('click',nextaudio);
prevbtn.addEventListener('click',prevaudio);
stopbtn.addEventListener('click',stopaudio);
getvolprogress.addEventListener('change',volumecontrol);
getprogress.addEventListener('click',progressaudioclick);



