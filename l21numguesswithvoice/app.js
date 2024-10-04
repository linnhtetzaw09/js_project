//UI

const minnum = document.querySelector(".minnumber"),
  maxnum = document.querySelector(".maxnumber"),
  getinput = document.querySelector("#guessnumber"),
  getbtn = document.querySelector("#btn"),
  message1 = document.querySelector(".message1"),
  message2 = document.querySelector(".message2"),
  getgameform = document.getElementById("gameform");

const getmicbtn = document.getElementById("mic-btn");
const getvoicecontainer = document.getElementById("voice-container");

const min = 1,
  max = 20,
  winnumber = randomnum(min, max);
  console.log(winnumber);
  // winnumber = 5;

let gameleft = 3;

minnum.innerHTML = min;
maxnum.innerHTML = max;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec = new window.SpeechRecognition;

getmicbtn.addEventListener('click',function(){
  // console.log("i am working");
  // console.log(getrec);

  // start() function from Recognition api
  getrec.start();

  getrec.addEventListener('result',(e)=>talking(e));

});

function talking(ele){
  // console.log(ele);
  // console.log(ele.results[0][0].transcript);

  const micresult = ele.results[0][0].transcript;
  // console.log(micresult);

  micmessage(micresult);
  getnumber(micresult);

};

function micmessage(msg){
  getvoicecontainer.innerHTML = `<span>Did you say !! ${msg}</span>`;
}

function getnumber(msg){
  const getnum = +msg;

  // console.log(getnum);
  // console.log(typeof getnum);

  // console.log("abc");
  if(Number.isNaN(getnum)){
  
    getvoicecontainer.innerHTML = `<div>This is not a valid number</div>`;
    return false;
  }

  //console.log("effg");

  getinput.value = getnum;

  // stop() function from Recognition api
  getrec.stop();


}

getbtn.addEventListener("click", function (e) {
  // let guess = Number(getinput.value);
  let guess = parseInt(getinput.value);

  if (guess < min || guess > max || isNaN(guess)) {
    setmessage2(`Please enter a number between ${min} to ${max}`, "red");
  }

  if (guess === winnumber) {
    gameover(true, `${winnumber} is correct . You won . Congrats !!`);
  } else {
    // gameleft--;
    gameleft -= 1;

    if (gameleft === 0) {
      gameover(false, `Game over, u lose. The correct number is ${winnumber}`);
    } else {
      //continue game

      setmessage1(
        `${guess} is not correct, ${gameleft} guess left. Try again`,
        "blue"
      );

      // clear getinput old value
      getinput.value = "";

      // autofocus in getinput
      getinput.focus();
    }
  }

  e.preventDefault();
});

function setmessage1(msg, color) {
  message1.innerHTML = msg;
  message1.style.color = color;
}

function setmessage2(msg, color) {
  message2.innerHTML = msg;
  message2.style.color = color;

  setTimeout(function () {
    message2.innerHTML = "";
  }, 2000);
}

function gameover(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //disable input
  getinput.disabled = true;

  // getinput border to green in message1
  getinput.style.borderColor = color;

  //message1
  setmessage1(msg, color);

  //play again ?
  getbtn.innerHTML = "Play Again ?";

  //add class
  // getbtn.className = 'btn playagain';
  getbtn.classList.add("playagain");
}

getgameform.addEventListener("mousedown", function (e) {
  // console.log(e.target);

  // e.target.className ==='btn playagain' classname nt ll check lo ya
  if (e.target.classList.contains("playagain")) {
    // console.log('i am working');

    window.location.reload();
  }
});

function randomnum(min, max) {
  let getrdm = Math.floor(Math.random() * (max - min) + min);
  return getrdm;
}

console.log(winnumber);
