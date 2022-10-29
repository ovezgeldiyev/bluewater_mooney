// menu start
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const headerLogo = document.getElementById("headerLogo");
const heroLogo = document.getElementById("heroLogo");
const hero = document.getElementById("hero");

const body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  if(headerLogo){
    headerLogo.classList.toggle("active");
  }
  if(heroLogo){
    heroLogo.classList.toggle("active");
  }
  if(hero){
    hero.classList.toggle("active");

  }
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};


// menu end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");

      let currentTabTop = document.querySelector(".tabBtn.active");
      currentTabTop.scrollIntoView();
     
    }
  });
}
// faq end
