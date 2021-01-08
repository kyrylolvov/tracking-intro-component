"use strict";

const menuButton = document.querySelector(".burgerMenu");
const websiteMenu = document.querySelector(".websiteMenu");
const burgerIcon = document.querySelector(".burgerIcon");

function changeMenuIcon() {
  if (burgerIcon.getAttribute("src") === "/images/icon-hamburger.svg") {
    burgerIcon.src = "/images/icon-close.svg";
  } else {
    burgerIcon.src = "/images/icon-hamburger.svg";
  }
}

function toggleMenu() {
  websiteMenu.classList.toggle("websiteMenu-active");
}

function toggleMobileMenu() {
  changeMenuIcon();
  toggleMenu();
}

menuButton.addEventListener("click", toggleMobileMenu);
