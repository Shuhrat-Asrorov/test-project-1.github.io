const burger = document.getElementById("burger");
const burgerIcon = document.getElementById("burger__icon");
const nav = document.getElementById("navMenu");

burger.addEventListener("click", () => {
    burgerIcon.classList.toggle("burger__icon_active");
    nav.classList.toggle("nav_active");
});
