var navLinks = document.getElementById("nav-links");

function sidebarShow() {
  navLinks.style.right = "0";
}

function sidebarHide() {
  navLinks.style.right = "-200px";
}


// cursor style

var cursor = document.getElementById("cursor")

document.onmousemove = function(e) {
  cursor.style.left = (e.pageX - 25) + "px";
  cursor.style.top = (e.pageY - 25) + "px";
  cursor.style.display = "block";
}
