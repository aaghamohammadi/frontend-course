"use strict";
import { Student } from "./modules/student.js";

const mobileNav = document.querySelector(".header__mobile-nav");
const headerNav = document.querySelector(".header__ul");
mobileNav.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "u" && event.ctrlKey) {
    event.preventDefault();
  }
});

// JSON - JavaScript Object Notation
