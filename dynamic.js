
// JS file to allow dynamic animations / processes

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
  // check the coordinates of the background to see if it has exited the viewport
  var background_pos = document.getElementById("hoh-background").getBoundingClientRect();
  if (background_pos.bottom <= 0) {
    document.getElementById("magic-navbar").style.top = "0";
  } else {
    document.getElementById("magic-navbar").style.top = "-200px";
  }
}