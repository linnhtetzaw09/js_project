//UI

const getmodal = document.querySelector('.modal');
const getmodalimg = document.querySelector('.modal-img');
const getcaption = document.querySelector('.caption');
const getbtnclose = document.querySelector('.btn-close');

function shownow(event) {
  getmodal.style.display = 'block'; // Show modal
  const imgSrc = event.target.src; // Get source of clicked image
  const imgAlt = event.target.alt; // Get alt text of clicked image

  getmodalimg.src = imgSrc; // Set modal image source
  getcaption.textContent = imgAlt; // Set caption text
}

getbtnclose.addEventListener('click', function () {
  getmodal.style.display = 'none'; 
});


// getbtnclose.onclick = function () {
//     getmodal.style.display = 'none'; 
// };


// document.addEventListener('click',function(e){
//     if(e.target === getmodal){
//         getmodal.style.display = "none";
//     }
// });