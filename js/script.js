let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let nav__krest = document.querySelector(".nav__krest");
burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  nav.classList.toggle("nav-active");
  nav__krest.classList.toggle("nav__krest-active");
});
nav__krest.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  nav.classList.toggle("nav-active");
  nav__krest.classList.toggle("nav__krest-active");
});
