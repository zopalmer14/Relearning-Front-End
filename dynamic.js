
// JS file to allow dynamic animations / processes

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("magic-navbar").style.top = "0";
  } else {
    document.getElementById("magic-navbar").style.top = "-200px";
  }
}