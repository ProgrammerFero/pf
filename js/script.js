// Draw Cards
let allCourses = [
  {
      id: 1 ,
      imgUrl: "assest/images_courses/Intro_Edit_App.png" ,
      heading: "Edit Apps" ,
      desc: "Edit Any Apps On Phone Using Mt-Manage And Apk Editor" ,
  },
  {
      id: 2 ,
      imgUrl: "assest/images_courses/intro Sketchware.png" ,
      heading: "SketchWare" ,
      desc: "Create A New App Using SketchWare , Start A New App A Good App Easliy" ,
  },
  {
      id: 3 ,
      imgUrl: "assest/images_courses/fix problems.png" ,
      heading: "Fix Problems" ,
      desc: "Fix A Lot Of Problems In Windows , Windows Update And Another Problems" ,
  },
];

window.onload = function() {
  localStorage.setItem("allCourses" , JSON.stringify(allCourses));
}
var servicescards = document.querySelector("#cards");


function drawproduct() {
  let productUi = allCourses.map((item) => {
      return `
      <div class="services-card">
          <div class="services-img">
              <img src="${item.imgUrl}" loading="lazy" alt="Course">
          </div>
          <div class="services-info">
              <h3 class="title">${item.heading}</h3>
              <p>${item.desc}</p>
              <a herf="#" onClick="saveCourse(${item.id})">Read More</a>
          </div>
      </div>
      `;
  });
  servicescards.innerHTML = productUi.join(''); 
}

drawproduct();

// Menu Icon
let menu_icons = document.querySelector('.menu-icons'),
nav = document.querySelector('nav');

menu_icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Save Id In LocalSotorage 
function saveCourse(id) {
  localStorage.setItem("courseId" , id)

  window.location = "html/courses.html"
}

// NavBar Link Course
var a1 = document.querySelector(".a1");
var a2 = document.querySelector(".a2");
var a3 = document.querySelector(".a3");
// Footer Links
var f1 = document.querySelector(".f1");
var f2 = document.querySelector(".f2");
var f3 = document.querySelector(".f3");

function saveid1() {
  localStorage.setItem("courseId" , 1);
  window.location = "html/courses.html"
}
a1.addEventListener("click" , saveid1 );
f1.addEventListener("click" , saveid1 );

function saveid2() {
  localStorage.setItem("courseId" , 2);
  window.location = "html/courses.html"
}
a2.addEventListener("click" , saveid2 );
f2.addEventListener("click" , saveid2 );

function saveid3() {
  localStorage.setItem("courseId" , 3);
  window.location = "html/courses.html"
}
a3.addEventListener("click" , saveid3 );
f3.addEventListener("click" , saveid3 );

// Typing
var typed = new Typed('#element', {
    strings: ["Programmer Fero" , "FrontEnd"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });


// scroll receal 
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.last-project, .headerform' , { origin: 'top' });
ScrollReveal().reveal('.mylogo-top, .services-card , .title-contact , .box-input , .input-group , .text-input' , { origin: 'bottom' });
ScrollReveal().reveal('.landing-info , .sendform , .flex-foot , .sendf', { origin: 'left' });


// Send Data Form
const scriptURL = "https://script.google.com/macros/s/AKfycbzmh974CEOC4SN72v12x4rEcZIJ-l-PyECelUagW2Nvt1uW-xA1nbRaeEg18ZsGOQCfGw/exec";

const form = document.forms['contact-form'];

form.addEventListener("submit" , e => {
    e.preventDefault()
    fetch(scriptURL , {method: "post" , body: new FormData(form)})
    .then(response => alert("Thanks You\n Your Data Is Submitted"))
    .then(() => {window.location.reload();})
    .catch(error => console.error("Error!!" , error.message))

})


// Check Sub Email , Number
if (localStorage.getItem("subemail") && localStorage.getItem("subnumber")) {
  console.log("There Is Sub Email , Number");
} else {
  window.location = "subscribe.html" ;
}


// Btn Top , Down
var topBtn = document.querySelector(".top");
var bottomBtn = document.querySelector(".bottom");
var topI = document.querySelector(".top i");

bottomBtn.addEventListener("click", function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});


window.onscroll = function() {
  if (scrollY <= 500) {
    topBtn.style.display = "none" ;
    bottomBtn.style.display = "block" ;
  }
  
  else {
    topBtn.style.display = "block" ;
    bottomBtn.style.display = "none" ;
  }
}

// Contact Form Validation
var nameError = document.getElementById("name-error");
var numberError = document.getElementById("number-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name Is Reqiured";
        return false ;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full Name" ;
        return false ;
    }

    nameError.innerHTML = "<i class='bx bxs-check-circle'></i>" ;
    return true ;
}

function validateNnumber() {
    var number = document.getElementById("contact-number").value;

    if (number.length == 0) {
        numberError.innerHTML = "Phone Number Is Reqiured";
        return false ;
    }

    if (number.length !== 11) {
        numberError.innerHTML = "Phone Number Should be 11 Digits";
        return false ;
    }
    if (number.match(/^[0-9]{10}$/)) {
        numberError.innerHTML = "Only Digits Please";
        return false ;
    }

    numberError.innerHTML = "<i class='bx bxs-check-circle'></i>" ;
    return true ;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email Is Reqiured";
        return false ;
    }

    if (email.length <= 10 ) {
        emailError.innerHTML = "Should 10 Letter A Less";
        return false ;
    }

    emailError.innerHTML = "<i class='bx bxs-check-circle'></i>" ;
    return true ;
}

function validateMsg() {
    var msg = document.getElementById("contact-msg").value;

    var reqiured = 30 ;
    var left = reqiured - msg.length ;

    if (left > 0) {
        msgError.innerHTML = left + " More Characters Reqiured";
        return false ;
    }

    msgError.innerHTML = "<i class='bx bxs-check-circle'></i>" ;
    return true ;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateNnumber() || !validateMsg()) {
        submitError.innerHTML = "PLease Enter Your Data To Submit" ;
        return false ;
    }
}