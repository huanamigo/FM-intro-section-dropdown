const featuresBtn = document.querySelector(".features-btn");
const featuresEl = document.querySelector(".features-list");
const companyBtn = document.querySelector(".company-btn");
const companyEl = document.querySelector(".company-list");
const arrowsUp = document.querySelectorAll(".arrow-up");
const arrowsDown = document.querySelectorAll(".arrow-down");

featuresBtn.addEventListener("click", showFeatures);
companyBtn.addEventListener("click", showCompany);

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
