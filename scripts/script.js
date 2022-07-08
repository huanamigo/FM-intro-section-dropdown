const featuresBtn = document.querySelector(".features-btn");
const featuresEl = document.querySelector(".features-list");
const companyBtn = document.querySelector(".company-btn");
const companyEl = document.querySelector(".company-list");

featuresBtn.addEventListener("click", showFeatures);
companyBtn.addEventListener("click", showCompany);

function showFeatures() {
  if (featuresEl.style.display == "list-item") {
    featuresEl.style.display = "none";
  } else {
    featuresEl.style.display = "list-item";
    console.log("chuj");
  }
}

function showCompany() {
  if (companyEl.style.display == "list-item") {
    companyEl.style.display = "none";
  } else {
    companyEl.style.display = "list-item";
    console.log("chuj");
  }
}
