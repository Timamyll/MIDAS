const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu__overlay");
const body = document.querySelector("body");
const menuPhone = document.querySelector(".menu__phone");
const close = document.querySelector(".img__close");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  menu.classList.toggle("menu-active");
  if (hamburger.classList.contains("hamburger-active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
});

menu.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu__overlay")) {
    menu.classList.remove("menu-active");
    hamburger.classList.remove("hamburger-active");
    body.style.overflow = "visible";
  }
});
close.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
  hamburger.classList.toggle("hamburger-active");
});
