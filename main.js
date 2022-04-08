"use strict";

function $(selector) {
  return document.querySelector(selector);
}

function find(el, selector) {
  let finded;
  return (finded = el.querySelector(selector)) ? finded : null;
}

function siblings(el) {
  const siblings = [];
  for (let sibling of el.parentNode.children) {
    if (sibling !== el) {
      siblings.push(sibling);
    }
  }
  return siblings;
}

const showAsideBtn = $(".show-side-btn");
const sidebar = $(".sidebar");
const wrapper = $("#wrapper");

showAsideBtn.addEventListener("click", function () {
  $(`#${this.dataset.show}`).classList.toggle("show-sidebar");
  wrapper.classList.toggle("fullwidth");
});

if (window.innerWidth < 767) {
  sidebar.classList.add("show-sidebar");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    sidebar.classList.remove("show-sidebar");
  }
});

// dropdown menu in the side nav
var slideNavDropdown = $(".sidebar-dropdown");

$(".sidebar .categories").addEventListener("click", function (event) {
  event.preventDefault();

  const item = event.target.closest(".has-dropdown");

  if (!item) {
    return;
  }

  item.classList.toggle("opened");

  siblings(item).forEach((sibling) => {
    sibling.classList.remove("opened");
  });

  if (item.classList.contains("opened")) {
    const toOpen = find(item, ".sidebar-dropdown");

    if (toOpen) {
      toOpen.classList.add("active");
    }

    siblings(item).forEach((sibling) => {
      const toClose = find(sibling, ".sidebar-dropdown");

      if (toClose) {
        toClose.classList.remove("active");
      }
    });
  } else {
    find(item, ".sidebar-dropdown").classList.toggle("active");
  }
});

$(".sidebar .close-aside").addEventListener("click", function () {
  $(`#${this.dataset.close}`).classList.add("show-sidebar");
  wrapper.classList.remove("margin");
});

/////////////////////////////////
/* abdelrahman */
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const realTime = document.querySelector(".Time-Now");

tabsContent.forEach((c) => (c.style.display = "none"));

// bad practice

// tabs.forEach(t => t.addEventListener('click', () => console.log(t)));

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  tabsContent.forEach((c) => (c.style.display = ""));

  //Real Time Style
  realTime.style.fontSize = "20px";
  realTime.style.textAlign = "right";
  realTime.style.color = "#0d6efd";
  realTime.style.margin = "0 6px 0 0";

  //Real Time Style

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

let changeGrid = "grid";
let inline_block = "inline-block";
let margin_bottom = "8px";
let oneTwoPre = "15px";
let lastPre = "20px";
let valueDefult = "0px";
let displayHide = "none";

document.querySelector(".click-js").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".formating-Style").style.display = changeGrid;
  document.querySelector(".formating-Style").style.gridTemplateColumns =
    "620px 620px 620px";
  const nodeListed = document.querySelectorAll(".Formating-File");
  nodeListed.forEach(function (_, i) {
    nodeListed[i].style.marginRight = oneTwoPre;
    nodeListed[i].style.marginBottom = margin_bottom;
  });
  document.querySelector(".last-pre").style.marginRight = lastPre;

  const title_lang_list = document.querySelectorAll(".title_lang");
  title_lang_list.forEach(function (_, i) {
    title_lang_list[i].style.display = displayHide;
  });

  const Title_fullScreen = document.querySelectorAll(
    ".Show_Title_Lang_Full_Screen"
  );
  Title_fullScreen.forEach(function (_, i) {
    Title_fullScreen[i].style.display = inline_block;
  });

  if (changeGrid == "grid") {
    changeGrid = "";
    oneTwoPre = "";
    lastPre = "";
    margin_bottom = "20px";
    displayHide = "";
    inline_block = "none";
  } else {
    changeGrid = "grid";
    oneTwoPre = "15px";
    lastPre = "20px";
    displayHide = "none";
    inline_block = "inline-block";
  }
});

document.querySelector(".home-Page").addEventListener("click", function () {
  tabsContent.forEach((c) => (c.style.display = "none"));
  //Real Time Style
  realTime.style.fontSize = "100px";
  realTime.style.textAlign = "center";
  realTime.style.color = "#fff";
  realTime.style.margin = "125px 0px 0 0";
});

// Create Time Live

setInterval(function () {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const locale = navigator.language;

  const printTime = new Intl.DateTimeFormat(locale, options).format(now);

  realTime.textContent = printTime;
}, 1000);
