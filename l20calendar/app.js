//get ui

const getcurrmonth = document.getElementById("curmonth");
const getcuryear = document.getElementById("curyear");
const getdays = document.getElementById("caldays");
const getuimonths = document.getElementById("months");
const getuiyears = document.getElementById("years");
const getyearbtn = document.querySelector(".year-btn");
const getmonthbtn = document.querySelector(".month-btn");

const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
let startyear = 2020;
let endyear = 2030;

let month,year;

window.addEventListener('load',function(){
    // console.log("i am working");

    let getday = new Date();
        month = getday.getMonth();
        year = getday.getFullYear();
    // console.log(getday);    //Tue Apr 23 2024 08:38:01 GMT+0630 (Myanmar Time)
    // console.log(month);     //3
    // console.log(year);     //2024

    getcurrmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();


});


function initmonths(){
    // console.log("i am month");

    getuimonths.innerHTML = "";

    for(let x = 0;x < months.length; x++){
        // console.log(x); //0 to 11

        const newdiv = document.createElement("div");
        newdiv.textContent = months[x];
        newdiv.classList.add("dropdown-item");

        // newdiv.addEventListener("click",function(){

            //=>method1
            // console.log(x);
            // month = x;
            // getcurrmonth.textContent = months[x];
            // initdays();

            //=>method2
            // console.log(this);
            // console.log(this.textContent);

            // month = months.indexOf(this.textContent);
            // console.log(month);
            // getcurrmonth.textContent = months[month];
            // initdays();
            
        // });

        newdiv.onclick = updatedays(x);

        // console.log(newdiv);
        getuimonths.appendChild(newdiv);
    }
}

function updatedays(idx){
    // console.log(idx); //0 to 11

    let selectmonth = idx;

    return function(){
        month = selectmonth;
        // console.log(month);  //0 to 11

        getcurrmonth.textContent = months[month];
        initdays();
    }
}

function inityears(){
    // console.log("i am year");

    getuiyears.innerHTML = "";

    for(let x = startyear; x <= endyear; x++){
        // console.log(x); //2020 to 2030

        const newdiv = document.createElement("div");
        newdiv.textContent = x;
        newdiv.classList.add("dropdown-item");

        // newdiv.addEventListener("click",function(){

            //method1
            // console.log(x);
            // year = x;
            // getcuryear.textContent = year
            // initdays();

            //method2
            // console.log(this);
            // console.log(this.textContent);
            //  year = this.textContent;
            // getcuryear.textContent = year;
            // initdays();
            
        // });

        //method3
        // newdiv.onclick = updateday(x);

        //method4
        // newdiv.onclick = ()=> {
        //     // console.log(x);   //2020 to 2023

        //     year = x;
        //     getcuryear.textContent = year;
        //     initdays();
        // }

        //method5
        // self invoking function
        newdiv.onclick = (function (selectedYear) {
            return function () {
                year = selectedYear;
                getcuryear.textContent = year;
                initdays();
            };
        })(x);

        // console.log(newdiv);
        getuiyears.appendChild(newdiv);
    }
}

// function updateday(idx){
//     // console.log(idx); //2020 to 2030

//     let selctyear = idx;

//     return function(){
//         year = selctyear;
//         // console.log(year);  //2020 to 2030

//         getcuryear.textContent = year;
//         initdays();
//     }
// }


function initdays(){
    // console.log("i am day");

    getdays.innerHTML = "";
     
                            //2024 3
    let tmpdays = new Date(year,month,0);
    // console.log(tmpdays);    //Sun Mar 31 2024 00:00:00 GMT+0630 (Myanmar Time)

    let getalldays = alldays(year,month);
    // console.log(getalldays);    //30

    let getendday = tmpdays.getDay();
    // console.log(getendday); //0


    let getprevendday = tmpdays.getDay();
    // console.log(getprevendday);     //0

    for(let x=0; x <= getprevendday;x++){
        // console.log(x); //0

         // <label class="day blank">1</label>
        let newlabel = document.createElement("label");
        newlabel.className = "day blank";
        // console.log(newlabel);

        getdays.appendChild(newlabel);
    }

    for(let y=0; y <= getalldays;y++){
        // console.log(y); //0 to 29

        let addday = y+1;

         // <label class="day">1</label>
        let newlabel = document.createElement("label");
        newlabel.textContent = addday;
        newlabel.classList.add("day");
        // console.log(newlabel);

        getdays.appendChild(newlabel);
    }


}

function alldays(year,month){
    // console.log(year,month); //2024 3

    let curalldays = new Date(year,month+1,0);  
    // console.log(curalldays);    //Tue Apr 30 2024 00:00:00 GMT+0630 (Myanmar Time)
    curalldays = curalldays.getDate();
    // console.log(curalldays);    //30
    return curalldays;
}

// getmonthbtn.addEventListener('click',function(){

//     if(this.lastElementChild.classList.contains('show')){
//         this.lastElementChild.classList.remove('show');
//     }else{
//         this.lastElementChild.classList.add('show');
//     }

// });

getyearbtn.addEventListener('click',function(){

    if(this.lastElementChild.classList.contains('show')){
        this.lastElementChild.classList.remove('show');
    }else{
        this.lastElementChild.classList.add('show');
    }

});



                    //year month day
// console.log(new Date(2023,1,10));
// console.log(new Date(2023,0,0));
// console.log(new Date(2023,5,0));
// console.log(new Date(2023,1,30));






