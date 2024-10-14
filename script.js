// Sticky header efektas
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Meniu mobiliesiems įrenginiams
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul.menu");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
});
