//get ui
const getcontainer = document.querySelector(".container");
const getvideoscreen = document.getElementById("videoscreen");
const playbtn = document.getElementById("play"),
  prevbtn = document.getElementById("prev"),
  nextbtn = document.getElementById("next"),
  stopbtn = document.getElementById("stop");

const getprogress = document.getElementById("progress"),
  getprogressbar = document.getElementById("progress-bar");
const getdisplaytime = document.getElementById("displaytime");
const gettitle = document.getElementById("title");

const getopenfullscreen = document.getElementById("openfullscreen");
const getclosefullscreen = document.getElementById("closefullscreen");

const videos = ["samplevideo1","samplevideo2"];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(video){
  getvideoscreen.src = `./source/${video}.mp4`;
  gettitle.innerHTML = video;
}

function playvideo(){
  playbtn.querySelector('i.fas').classList.remove('fa-play');
  playbtn.querySelector('i.fas').classList.add('fa-pause');

  getvideoscreen.play();
}

function pausevideo(){
  playbtn.querySelector('i.fas').classList.add('fa-play');
  playbtn.querySelector('i.fas').classList.remove('fa-pause');

  getvideoscreen.pause();
}

function playandpausevideo(){
  if(getvideoscreen.paused){
    playvideo();
  }else{
    pausevideo();
  }
}

function nextvideo(){
  curridx++;

  if(curridx > videos.length-1){
    curridx  = 0;
  }

  loadvideo(videos[curridx]);
  playvideo();
}

function previousvideo(){
  curridx -= 1;

  if(curridx < 0){
    curridx  = videos.length-1;
  }

  loadvideo(videos[curridx]);
  playvideo();
}

function stopvideo(){
  getvideoscreen.currentTime = 0;
  pausevideo();
}


function updateprogress(e){
  // const curretTime = e.target.currentTime;
  // const duration = e.target.duration;
  // console.log(curretTime,duration);

  // const {currentTime} = e.target;
  // const {duration} = e.target;
  // console.log(curretTime,duration);

  // const {currentTime,duration} = e.target;
  // console.log(curretTime,duration);

  const [currentTime,duration] = [e.target.currentTime,e.target.duration];
  // console.log(curretTime,duration);


  if(getvideoscreen.currentTime === 0){
    getprogressbar.style.width = "0%";
  }else{
    const progresspercent = (currentTime/duration)*100;
    getprogressbar.style.width = `${progresspercent}%`;
  }

  let getmins = Math.floor(getvideoscreen.currentTime/60);
  let getsecs = Math.floor(getvideoscreen.currentTime%60);

  // if(getmins < 10){
  //   getmins = "0"+getmins;
  //   // getmins = "0" + String(getmins);
  // }

  // if(getsecs < 10){
  //     // getmins = "0"+getsecs;
  //     getsecs = "0" + String(getsecs);
  //   }


  const getminvalue = getmins.toString().padStart(2,"0");
  const getsecvalue = getsecs.toString().padStart(2,"0");
  // console.log(getminvalue,getsecvalue);

  getdisplaytime.innerHTML = `${getminvalue}:${getsecvalue}`;

}

function setprogress(e){
  const getclientwidth = e.target.clientWidth;
  const getclickx = e.offsetX;
  const duration = getvideoscreen.duration;

  getvideoscreen.currentTime = (getclickx/getclientwidth) * duration;
}

function openfullscreen(){

  if(getcontainer.requestFullscreen){
    getcontainer.requestFullscreen();   //standard
  }else if(getcontainer.mozRequestFullscreen){
    getcontainer.mozRequestFullscreen();  //firefox
  }else if(getcontainer.webkitRequestFullscreen){
    getcontainer.webkitRequestFullscreen(); //chrome,safari,opera
  }else if(getcontainer.msRequestFullscreen){
    getcontainer.msRequestFullscreen(); //ie, edga
  }

  getopenfullscreen.style.display = "none";
  getclosefullscreen.style.display = "inline-block";
}

function closefullscreen(){

  if(document.exitFullscreen){
    document.exitFullscreen();   //standard
  }else if(document.mozCancelFullscreen){
    document.mozCancelFullscreen();  //firefox
  }else if(document.webkitExitFullscreen){
    document.webkitExitFullscreen(); //chrome,safari,opera
  }else if(document.msExitFullscreen){
    document.msExitFullscreen(); //ie, edga
  }

  getopenfullscreen.style.display = "inline-block";
  getclosefullscreen.style.display = "none";
}

getvideoscreen.addEventListener('timeupdate',updateprogress);
getvideoscreen.addEventListener('ended',nextvideo);

playbtn.addEventListener('click',playandpausevideo);
prevbtn.addEventListener('click',previousvideo);
nextbtn.addEventListener('click',nextvideo);
stopbtn.addEventListener('click',stopvideo);

getprogress.addEventListener('click',setprogress);

getopenfullscreen.addEventListener('click',openfullscreen);
getclosefullscreen.addEventListener('click',closefullscreen);

