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
  window.location = "courses.html"
}
a1.addEventListener("click" , saveid1 );
f1.addEventListener("click" , saveid1 );

function saveid2() {
  localStorage.setItem("courseId" , 2);
  window.location = "courses.html"
}
a2.addEventListener("click" , saveid2 );
f2.addEventListener("click" , saveid2 );

function saveid3() {
  localStorage.setItem("courseId" , 3);
  window.location = "courses.html"
}
a3.addEventListener("click" , saveid3 );
f3.addEventListener("click" , saveid3 );


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
  if (scrollY <= 200) {
    topBtn.style.display = "none" ;
    bottomBtn.style.display = "block" ;
  }
  
  else {
    topBtn.style.display = "block" ;
    bottomBtn.style.display = "none" ;
  }
}

// scroll Reveal 
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.services-card' , { origin: 'bottom' });

// Sub Email  Number
if (localStorage.getItem("subemail") && localStorage.getItem("subnumber")) {
    console.log("There Is Sub Email , Number");
  } else {
    window.location = "../subscribe.html" ;
  }