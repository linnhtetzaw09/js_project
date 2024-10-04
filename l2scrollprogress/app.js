//UI

const getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
    // console.log('hi');

    scrollpoint();
}


function scrollpoint(){
    // console.log('hay');

    let getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);   //0 to 1764

    let getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);  //730

    let getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);   //2494

    let calheight = getscrollheight - getclientheight;
    // console.log(calheight);   //1764

    // let getfinal = Math.floor(getscrolltop * 100 / calheight);
    // console.log(getfinal);

    let getfinal = Math.floor((getscrolltop/calheight) * 100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;
}


function printme(){
    // console.log("hi");

    window.print();    //print() is default function which mean already include in js
}