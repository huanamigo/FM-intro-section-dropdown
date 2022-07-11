const featuresBtn = document.querySelector(".features-btn");
const featuresEl = document.querySelector(".features-list");
const companyBtn = document.querySelector(".company-btn");
const companyEl = document.querySelector(".company-list");
const arrowsUp = document.querySelectorAll(".arrow-up");
const arrowsDown = document.querySelectorAll(".arrow-down");
const hambMenuBg = document.querySelector(".hamb-menu-bg");
const hambMenu = document.querySelector(".hamb-menu");
const hamb = document.querySelector(".hamb");
let windowWidth = window.innerWidth;

function resizeListener() {
  windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    featuresBtn.addEventListener("click", showFeatures);
    companyBtn.addEventListener("click", showCompany);
    hamb.addEventListener("click", showHamb);

    function showHamb() {
      if (hambMenu.style.opacity == 1) {
        hambMenu.style.opacity = 0;
        hambMenuBg.style.opacity = 0;
      } else {
        hambMenu.style.opacity = 1;
        hambMenuBg.style.opacity = "0.7";
      }
    }

    function showFeatures() {
      if (featuresEl.style.opacity != 0) {
        featuresEl.style.height = 0;
        featuresEl.style.opacity = "0";
        featuresEl.style.visibility = "hidden";
        arrowsUp[0].style.display = "none";
        arrowsDown[0].style.display = "unset";
      } else {
        featuresEl.style.height = "auto";
        featuresEl.style.opacity = "1";
        featuresEl.style.visibility = "visible";
        console.log("chuj");
        arrowsUp[0].style.display = "unset";
        arrowsDown[0].style.display = "none";
      }
    }

    function showCompany() {
      if (companyEl.style.opacity != 0) {
        companyEl.style.height = 0;
        companyEl.style.opacity = "0";
        companyEl.style.visibility = "hidden";
        arrowsUp[1].style.display = "none";
        arrowsDown[1].style.display = "unset";
      } else {
        companyEl.style.height = "auto";
        companyEl.style.opacity = "1";
        companyEl.style.visibility = "visible";
        console.log("chuj");
        arrowsUp[1].style.display = "unset";
        arrowsDown[1].style.display = "none";
      }
    }
  } else {
  }
}

window.addEventListener("resize", resizeListener);
