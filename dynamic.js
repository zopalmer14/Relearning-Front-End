
// JS file to allow dynamic animations / processes

function setup() {
  /* check for the window position relative to the header img whenever the user scrolls */  
  window.onscroll = function() {
    scrollFunction();
  }

  /* when the user mouses over the navbar, we need to change the styling */
  var navbars = document.getElementsByClassName("navbar");
  for (var i = 0; i < navbars.length; i++) {
    /* mouseover function */
    navbars[i].onmouseover = function() {
      navbarEnter();
    }

    /* mouseleave function */
    navbars[i].onmouseleave = function() {
      navbarExit();
    }
  }
}

function scrollFunction() {
  // check the coordinates of the background to see if it has exited the viewport
  var background = document.getElementById("hoh-background")
  if (background != null) {
    var background_pos = background.getBoundingClientRect();
    if (background_pos.bottom <= 0) {
      document.getElementById("magic-navbar").style.top = "0";
    } else {
      document.getElementById("magic-navbar").style.top = "-200px";
    }
  }
}

function navbarEnter() {
  /* change the background color of the banner and the navbar itself */
  var banner = document.getElementById("banner");
  banner.style.background = '#8a8a8a';

  var navbars = document.getElementsByClassName("navbar");
  for (var i = 0; i < navbars.length; i++) {
    navbars[i].style.background = '#024F0B';
  }

  /* change the color of the text within the navbar */
  var name = document.getElementById("name");
  name.style.color = '#f2f2f2';

  var nav_links = document.getElementsByClassName("nav-link");
  for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].style.color = '#f2f2f2';
    if (nav_links[i].firstElementChild != null) {
      nav_links[i].firstElementChild.style.color = '#f2f2f2';
    }
  }
}

function navbarExit() {
  /* change the background color of the banner and the navbar itself */
  var banner = document.getElementById("banner");
  banner.style.background = '#024F0B';

  var navbars = document.getElementsByClassName("navbar");
  for (var i = 0; i < navbars.length; i++) {
    navbars[i].style.background = '#f2f2f2';
  }

  /* change the color of the text within the navbar */
  var name = document.getElementById("name");
  name.style.color = '#333333';

  var nav_links = document.getElementsByClassName("nav-link");
  for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].style.color = '#333333';
    if (nav_links[i].firstElementChild != null) {
      nav_links[i].firstElementChild.style.color = '#333333';
    }
  }
}