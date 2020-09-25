function showTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("modalbox");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  if( evt != null ){
    $(".homepage").fadeOut("slow");
    evt.currentTarget.className += " active";
    if (evt.currentTarget.id == "aboutTab") {
      // var typed = new Typed(".element", options);
    }

  }
}

// function scrollEvent(){
//   if( document.body.scrollTop > 0 && document.body.scrollTop < 24 ){
//     document.getElementById( "aboutTab" ).click();
//     $("#homepage").css({zIndex: 0});
//   } else if( document.body.scrollTop > 24 && document.body.scrollTop < 48 ){
//     document.getElementById( "educationTab" ).click();
//     $("#homepage").css({zIndex: 0});
//   } else if( document.body.scrollTop > 48 && document.body.scrollTop < 72 ){
//     document.getElementById( "workTab" ).click();
//   } else if( document.body.scrollTop > 72 && document.body.scrollTop < 96 ){
//     $("#homepage").css({zIndex: 0});
//     document.getElementById( "contactTab" ).click();
//     $("#homepage").css({zIndex: 0});
//   } else {
//     return false;
//   }
// }

// function closeTab(evt, tabName) {
//   document.getElementById(tabName).style.display = "none";
// }

// document.getElementById( 'aboutTab' ).click();

/* Typd JS Init */
var options = {
  strings: ["My name is <strong>Amit Saluja</strong>. <br><br> <p class='railWayFont'> I create Website & Webapp. <br><br><br> <a href='javascript:void(0)' onclick=\"showTab(event, 'contact')\">Contact Me!!!</a> </p>"],
  typeSpeed: 25
};
var typed = new Typed(".element", options);

/* Particle JS Init */
particlesJS("particles-js", {
  particles: {
    number: { value: 280, density: { enable: true, value_area: 1200 } },
    color: { value: "#ffffff" },
    shape: {
      type: "star",
      stroke: { width: 0, color: "#ffffff" },
      polygon: { nb_sides: 10 },
      image: { src: "img/star.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

function openNav() {
    document.getElementById("sideNavigation").style.width = "40%";
    // document.getElementById("scrollableDiv").style.marginRight = "40%";
    document.getElementById("openSideNav").style.display = "none";
    document.getElementById("closeSideNav").style.display = "block";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    // document.getElementById("scrollableDiv").style.marginRight = "0";
    document.getElementById("openSideNav").style.display = "block";
    document.getElementById("closeSideNav").style.display = "none";
}


function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


$( document ).ready(function() {
var speed = 75;
var h1 = document.querySelector('h1');
var h3 = document.querySelector('h3');
var delay = h1.innerHTML.length * speed + speed;

typeEffect(h1, speed);


setTimeout(function(){
  h3.style.display = "inline-block";

  typeEffect(h3, 40);
}, delay);

});

