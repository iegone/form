const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const steps = document.querySelectorAll(".step");
const form_steps = document.querySelectorAll(".form-step");
let active = 1;

const roleSelect = document.getElementById("roleSelect");
const sellerForm = document.querySelector(".Seller-form");
const buyerForm = document.querySelector(".Buyer-form");
const InvestorForm = document.querySelector(".Investor-form");
const formThree = document.querySelector(".form-three");
let currentStep = 0;

nextButton.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
});

prevButton.addEventListener("click", () => {
  if (currentStep === 2) {
    formThree.classList.remove("active"); 
    currentStep = 1; 
  } else if (currentStep === 1) {
    if (roleSelect.value === "Seller-form") {
      sellerForm.classList.remove("active");
    } else if (roleSelect.value === "Buyer-form") {
      buyerForm.classList.remove("active");
    } else if (roleSelect.value === "Investor-form") {
      InvestorForm.classList.remove("active");
    }
    currentStep = 0; 
  }
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});

const updateProgress = () => {
  console.log("steps.length =>" + steps.length);
  console.log("active => " + active);
  steps.forEach((step, i) => {
    if (i == active - 1) {
      step.classList.add("active");
      if (form_steps[i]) {
        form_steps[i].classList.add("active");
      }
      console.log("i =>" + i);
    } else {
      step.classList.remove("active");
      if (form_steps[i]) {
        form_steps[i].classList.remove("active");
      }
    }
  });
  if (active == 1) {
    prevButton.disabled = true;
  } else if (active === steps.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const btnNext = document.querySelector(".btn-next");
  const formSteps = document.querySelectorAll(".form-step");

  btnNext.addEventListener("click", function () {
    formSteps.forEach(function (step) {
      step.classList.remove("active");
    });

    if (currentStep === 0) {
      if (roleSelect.value === "Seller-form") {
        sellerForm.classList.add("active");
        currentStep = 1;
      } else if (roleSelect.value === "Buyer-form") {
        buyerForm.classList.add("active");
        currentStep = 1;
      } else if (roleSelect.value === "Investor-form") {
        InvestorForm.classList.add("active");
        currentStep = 1;
      }
    } else if (currentStep === 1) {
      formThree.classList.add("active");
      currentStep = 2;
    }
  });
});








document.addEventListener("DOMContentLoaded", function () {
  var propertySelected = document.querySelector(
    'select[name="entry.1847447004"]'
  );
  var enterPriceDiv = document.querySelector(".Enter_price");

  propertySelected.addEventListener("change", function () {
    if (this.value === "نعم") {
      enterPriceDiv.style.display = "block";
    } else {
      enterPriceDiv.style.display = "none";
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const roleSelect = document.getElementById("roleSelect");
  const btnNext = document.querySelector(".btn-next");
  const warningMessage = document.getElementById("warningMessage");

  
  toggleNextButton();

  
  roleSelect.addEventListener("change", function () {
    toggleNextButton();
  });

  function toggleNextButton() {
    if (roleSelect.value) {
      btnNext.disabled = false; 
      warningMessage.style.display = "none"; 
    } else {
      btnNext.disabled = true; 
      warningMessage.style.display = "block"; 
    }
  }
});




document.addEventListener("DOMContentLoaded", function () {
  const btnNext = document.querySelector(".btn-next");
  const roleSelect = document.getElementById("roleSelect");
  const warningMessage = document.getElementById("warningMessage");

  btnNext.addEventListener("click", function () {
    if (roleSelect.value === "") {
      warningMessage.style.display = "block";
    } else {
      warningMessage.style.display = "none";
    }
  });
});