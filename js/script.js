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
//======================                      ==========================================
