"use strict";

/////////////////////////////////////
////MOBILE NAV ANIMATION/////////////
/////////////////////////////////////

const mobileNavBtn = document.querySelector(`.btn-mobile-nav`);
const topNavLine = document.querySelector(`.top-nav-line`);
const bottomNavLine = document.querySelector(`.bottom-nav-line`);
const mainNav = document.querySelector(`.main-nav`);
let clickCount = 0;

mobileNavBtn.addEventListener(`click`, () => {
  clickCount++;
  if (clickCount % 2 === 0) {
    topNavLine.classList.remove(`top-nav-line-animation`);
    bottomNavLine.classList.remove(`bottom-nav-line-animation`);
    mainNav.classList.remove(`show-mobile-nav`);
    topNavLine.classList.add(`close-top-nav-line-animation`);
    bottomNavLine.classList.add(`close-bottom-nav-line-animation`);
  } else {
    topNavLine.classList.remove(`close-top-nav-line-animation`);
    bottomNavLine.classList.remove(`close-bottom-nav-line-animation`);
    mainNav.classList.add(`show-mobile-nav`);
    topNavLine.classList.add(`top-nav-line-animation`);
    bottomNavLine.classList.add(`bottom-nav-line-animation`);
  }
  console.log(clickCount);
});
