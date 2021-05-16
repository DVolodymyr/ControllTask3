function openTab(tabName) {
  const tab = document.getElementById(tabName);
  const tabs = document.getElementsByClassName(`tabs__block`);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove(`active`);
  }
  tab.classList.add(`active`);
}
