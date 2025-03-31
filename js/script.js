let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let nav__krest = document.querySelector(".nav__krest");
let bg__nav = document.querySelector(".bg__nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  nav.classList.toggle("nav-active");
  nav__krest.classList.toggle("nav__krest-active");
  bg__nav.classList.toggle("bg__nav-active");
});
nav__krest.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  nav.classList.toggle("nav-active");
  nav__krest.classList.toggle("nav__krest-active");
  bg__nav.classList.toggle("bg__nav-active");
});
