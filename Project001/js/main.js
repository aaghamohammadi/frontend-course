"use strict";

const mobileNav = document.querySelector(".header__mobile-nav");
const headerNav = document.querySelector(".header__ul");
mobileNav.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});
