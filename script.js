//  Script for Drawer
// Get elements
const hamburger = document.querySelector(".hamburger");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("drawerOverlay");
const closeBtn = document.getElementById("drawerClose");
const body = document.body;

// Open drawer
function openDrawer() {
  drawer.classList.add("open");
  overlay.classList.add("active");
  body.classList.add("no-scroll");
}

// Close drawer
function closeDrawer() {
  drawer.classList.remove("open");
  overlay.classList.remove("active");
  body.classList.remove("no-scroll");
}

// Event listeners
hamburger.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

// Close on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeDrawer();
  }
});

// Close when a nav link is clicked
document.querySelectorAll(".drawer-nav a").forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

// Close when join button is clicked
document
  .querySelector(".drawer-join-btn")
  .addEventListener("click", closeDrawer);
