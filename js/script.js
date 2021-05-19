"use strict";
//======================           BURGER           ==========================================
$("document").ready(function () {
  $(".burger").click(function (event) {
    $(".burger, .menu__list").toggleClass("active");
  });
});
//======================          TABS            ==========================================
function openTab(tabName) {
  const tab = document.getElementById(tabName);
  const tabs = document.getElementsByClassName(`tabs__block`);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove(`active`);
  }
  tab.classList.add(`active`);
}
//======================           ACORDION          =======================================
let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//======================          SMOOTH SCROLL            ==========================================
const menuLinks = document.querySelectorAll(".menu__item[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
