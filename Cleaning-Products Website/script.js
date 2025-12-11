// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navlist = document.querySelector(".navlist");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("open");
  hamburger.textContent = navlist.classList.contains("open") ? "✖" : "☰";
});

// Dropdown click toggle for mobile
const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".dropdown-btn");

dropdownBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("show");
   if (window.innerWidth <= 900) {
    document.querySelector(".mobile-dropdown").classList.toggle("show");
  }
});
