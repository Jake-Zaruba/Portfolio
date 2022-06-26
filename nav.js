"use strict";

/////////////////////////////////////
////MOBILE NAV ANIMATION/////////////
/////////////////////////////////////

const mobileNavBtn = document.querySelector(`.btn-mobile-nav`);
const topNavLine = document.querySelector(`.top-nav-line`);
const bottomNavLine = document.querySelector(`.bottom-nav-line`);
const mainNav = document.querySelector(`.main-nav`);
let clickCount = 0;

// close nav //
mobileNavBtn.addEventListener(`click`, () => {
  clickCount++;
  if (clickCount % 2 === 0) {
    topNavLine.classList.remove(`top-nav-line-animation`);
    bottomNavLine.classList.remove(`bottom-nav-line-animation`);
    mainNav.classList.remove(`show-mobile-nav`);
    topNavLine.classList.add(`close-top-nav-line-animation`);
    bottomNavLine.classList.add(`close-bottom-nav-line-animation`);
    // open nav //
  } else {
    topNavLine.classList.remove(`close-top-nav-line-animation`);
    bottomNavLine.classList.remove(`close-bottom-nav-line-animation`);
    mainNav.classList.add(`show-mobile-nav`);
    topNavLine.classList.add(`top-nav-line-animation`);
    bottomNavLine.classList.add(`bottom-nav-line-animation`);
  }
  console.log(clickCount);
});

/////////////////////////////////
////SMOOTH SCROLLING/////////////
/////////////////////////////////

const allLinks = document.querySelectorAll(`.main-nav-link`);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      topNavLine.classList.remove(`top-nav-line-animation`);
      bottomNavLine.classList.remove(`bottom-nav-line-animation`);
      mainNav.classList.remove(`show-mobile-nav`);
      topNavLine.classList.add(`close-top-nav-line-animation`);
      bottomNavLine.classList.add(`close-bottom-nav-line-animation`);
    }

    // Scroll to other links
    else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
      topNavLine.classList.remove(`top-nav-line-animation`);
      bottomNavLine.classList.remove(`bottom-nav-line-animation`);
      mainNav.classList.remove(`show-mobile-nav`);
      topNavLine.classList.add(`close-top-nav-line-animation`);
      bottomNavLine.classList.add(`close-bottom-nav-line-animation`);
    }
  });
});

///////////////////////////////
////COPYRIGHT YEAR/////////////
///////////////////////////////

let year = document.getElementById(`year`);
const d = new Date();
let currentYear = d.getFullYear();

// Replace copyright text with current year //
year.innerHTML = currentYear;
