"use strict"; //======================           BURGER           ==========================================

$("document").ready(function () {
  $(".burger").click(function (event) {
    $(".burger, .menu__list").toggleClass("active");
  });
}); //======================          TABS            ==========================================

function openTab(tabName) {
  var tab = document.getElementById(tabName);
  var tabs = document.getElementsByClassName("tabs__block");

  for (var _i = 0; _i < tabs.length; _i++) {
    tabs[_i].classList.remove("active");
  }

  tab.classList.add("active");
} //======================           ACORDION          =======================================


var acc = document.getElementsByClassName("accordion");
var i;

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
} //======================          SMOOTH SCROLL            ==========================================


var menuLinks = document.querySelectorAll(".menu__item[data-goto]");

if (menuLinks.length > 0) {
  var onMenuLinkClick = function onMenuLinkClick(e) {
    var menuLink = e.target;

    if (menuLink.dataset["goto"] && document.querySelector(menuLink.dataset["goto"])) {
      var gotoBlock = document.querySelector(menuLink.dataset["goto"]);
      var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  };

  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
} //======================           SLIDER           ==========================================


var offset = 0;
var slider = document.querySelector(".shopCarts");
document.querySelector(".icon-Arrow-rightB").addEventListener("click", function () {
  offset += 428;
  shopCarts.style.left = -offset + "px";
});