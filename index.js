let html = document.querySelector('html');
let logo = document.querySelector('.logo');
let clip = document.querySelector('.clip');
window.addEventListener('scroll', function(e) {
  logo.setAttribute('transform',`translate(0 ${html.scrollTop / 5 + 2})`);
  clip.setAttribute('transform',`translate(0 -${html.scrollTop / 10 + 8})`);
  if (scrollPosition > 30) {
    myDiv.classList.add('hidden');
  } else {
    myDiv.classList.remove('hidden');
  }
});

new fullpage('#fullpage', {
  navigation: true,
  responsiveWidth: 900,
  anchors: ['home', 'about-us', 'contact'],
  parallax: true,
  onLeave: function(origin, destination, direction){
      console.log("Leaving section" + origin.index);
  },
});

window.addEventListener('scroll', function() {
  var myDiv = document.getElementById('myDiv');
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 30) {
    myDiv.classList.add('hidden');
  } else {
    myDiv.classList.remove('hidden');
  }
});
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
