const getimgboxes = document.querySelectorAll('.imgbox');

getimgboxes.forEach(function(getimgbox,idx){
  console.log(getimgbox);
  getimgbox.addEventListener('click',function(){
    // console.log(idx);  // 0 to 4

    showbox(idx);
  });
});

function showbox(idx){
  console.log("from parameter = ", idx);  //0 to 4

  getimgboxes.forEach(function(imagebox,curidx){
    // console.log("current idx = ",curidx);
    if(idx === curidx){
      imagebox.classList.add('show');

      imagebox.addEventListener('click',function(e){
        // console.log(e.target);

        if(e.target.className === "btn-close"){
          // console.log("hi");
          imagebox.classList.remove('show');
        }

        if(e.target.classList.contains('btn')){
          const getsubbtn = imagebox.querySelector('.btn');
          // const getsubbtn = getimgboxes[idx].querySelector('.btn');
          getsubbtn.textContent = "Subscribed";
        }

      });

    }else{
      imagebox.classList.remove('show');
    }

  })


}