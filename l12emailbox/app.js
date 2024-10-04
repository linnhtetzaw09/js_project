const getemail = document.getElementById('emails');
const gettextarea = document.getElementById('msg');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.emailcontainer');

getemail.focus();

getemail.addEventListener('keyup', function(e) {
  // console.log(e.target.value);
  console.log(this.value);

  // create email list based on input value
  createemaillist(this.value);
})

function createemaillist(inputtext) {
  // console.log(inputtext);

  // split by comma
  // const emailitem = inputtext.split(',');
  // console.log(emailitem);

  // remove empty space
  // const emailitem = inputtext.split(',').filter(rmempty => rmempty.trim() !== '');
  // console.log(emailitem);

  // remove empty space and space text
  const emailitems = inputtext.split(',').filter(rmempty => rmempty.trim() !== '').map(rmtxtempty => rmtxtempty.trim());
  // console.log(emailitems);

  getemcontainer.innerHTML = "";

  emailitems.forEach(function(emailitem) {
    // console.log(emailitem);

    const newspan = document.createElement('span');
    newspan.textContent = emailitem;
    newspan.classList.add('email');
    // console.log(newspan);

    getemcontainer.appendChild(newspan);
  });
}

getbtn.addEventListener('click', function(e) {
  e.preventDefault();
  sendemail();
});

function sendemail() {
  const getallemails = document.querySelectorAll('.email');
  const gettxtvalue = gettextarea.value;

  console.log(getallemails);
  console.info(gettxtvalue);

  var persons = [];

  if (getallemails.length > 0 && gettxtvalue) {
    getallemails.forEach(function(getallemail) {
      persons.push({
        email: getallemail.textContent,
        message: gettxtvalue
      })
    })
    // Log the persons array or proceed with sending logic
    console.log(persons);
  } else {
    window.alert("Enter Message.");
    gettextarea.focus();
  }
}


