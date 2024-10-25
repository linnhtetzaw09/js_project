// UI
const database = [
  {
    question: "Choose Traffic Light ?",
    a: "./img/img/airport.jpg",
    b: "./img/img/ambulance.jpg",
    c: "./img/img/mountain.jpg",
    d: "./img/img/traffic.jpg",
    correctanswer: "d"
  },
  {
    question: "Choose Mountain ?",
    a: "./img/img/airport.jpg",
    b: "./img/img/ambulance.jpg",
    c: "./img/img/mountain.jpg",
    d: "./img/img/traffic.jpg",
    correctanswer: "c"
  },
  {
    question: "Choose Airport ?",
    a: "./img/img/airport.jpg",
    b: "./img/img/ambulance.jpg",
    c: "./img/img/mountain.jpg",
    d: "./img/img/traffic.jpg",
    correctanswer: "a"
  },
  {
    question: "Choose Ambulance ?",
    a: "./img/img/airport.jpg",
    b: "./img/img/ambulance.jpg",
    c: "./img/img/mountain.jpg",
    d: "./img/img/traffic.jpg",
    correctanswer: "b"
  }
];

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getinputs = document.querySelectorAll('.answer'); // NodeList

const geta_img = document.getElementById('a_img'),
      getb_img = document.getElementById('b_img'),
      getc_img = document.getElementById('c_img'),
      getd_img = document.getElementById('d_img');

const getbtn = document.querySelector('.btn');

let currentidx = 0;
let score = 0;

function startQuestion() {

  removeSelected();

  const currentques = database[currentidx];

  getquestion.textContent = currentques.question; 
  geta_img.src = currentques.a;
  getb_img.src = currentques.b;
  getc_img.src = currentques.c;
  getd_img.src = currentques.d;
}

startQuestion();

function getSingleInput() {
  let answer;

  getinputs.forEach(function(getinput) {
    // console.log(getinput);

    if(getinput.checked) {
      // console.log(getinput.id);
      answer = getinput.id;
    }
  });

  return answer;
}

getbtn.addEventListener('click', function() {
  const getanswer = getSingleInput();
  
  if(getanswer) {
    if(getanswer === database[currentidx].correctanswer) {
      score++;
    }

    currentidx++;

    if(currentidx < database.length) {
      startQuestion();
    } else {
      // console.log(score);

      getcontainer.innerHTML = `
        <h3>Total Score : ${score*25}</h3>
        <h4>You answered correctly at ${score} / ${database.length}</h4>
        <!-- <button type="button" class="btn" ondblclick="window.location.reload();">Double Click to Reload</button> !-->
        <button type="button" class="btn" onclick="doubleClick()">Double Click to Reload</button>
      `;
    }
  } else {
    window.alert("Choose One Answer.");
  }
});


function removeSelected(){
  getinputs.forEach(function(getinput){
    return getinput.checked = false;
  })
}

let clickTimes = 0;

function doubleClick(){

  // console.log(clickTimes);

  if(clickTimes === 0){

    clickTimes = Date.now();
    // console.log(clickTimes);

  } else{

    if((Date.now() - clickTimes) < 1000){
      window.location.reload();
      clickTimes = 0;
    }else{
      clickTimes = Date.now();
    }

  }

}