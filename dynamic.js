
// JS file to allow dynamic animations / processes

function setup() {
  /* check for the window position relative to the header img whenever the user scrolls */  
  window.onscroll = function() {
    scrollFunction();
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