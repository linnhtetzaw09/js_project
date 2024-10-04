//UI

const getdownloadbtn = document.querySelector('.download-btn');
const getprogressbar = document.querySelector('.progress-bar');
const geturl = "https://linkedin.com";


getdownloadbtn.addEventListener('click',function(){

    let setwidth = 0;

    let setinv = setInterval(progressinc,100);

    function progressinc(){

        if(setwidth >= 100){

            clearInterval(setinv);

            //redirect
            window.location.href = geturl;

        }else{
            setwidth++;
            getprogressbar.style.width = setwidth + "%";
            getprogressbar.setAttribute("data-increase",`${setwidth}%`);
            getdownloadbtn.setAttribute('disabled',true);
        }

        // console.log(setwidth);

    }

});
