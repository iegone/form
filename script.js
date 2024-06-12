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
      investorForm.classList.remove("active");
    }
    currentStep = 0;
  }
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});

nextButton.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
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
  const nextButton = document.querySelector(".btn-next");
  const prevButton = document.querySelector(".btn-prev");
  const steps = document.querySelectorAll(".step");
  const formSteps = document.querySelectorAll(".form-step");
  const roleSelect = document.getElementById("roleSelect");
  const sellerForm = document.querySelector(".Seller");
  const buyerForm = document.querySelector(".Buyer");
  const investorForm = document.querySelector(".Investor");
  const formThree = document.querySelector(".form-three");
  const warningMessage = document.getElementById("warningMessage");
  const propertySelected = document.querySelector(
    'select[name="entry.1847447004"]'
  );
  const enterPriceDiv = document.querySelector(".Enter_price");
  let currentStep = 0;
  let active = 1;

  function updateProgress() {
    steps.forEach((step, i) => {
      if (i === active - 1) {
        step.classList.add("active");
        if (formSteps[i]) {
          formSteps[i].classList.add("active");
        }
      } else {
        step.classList.remove("active");
        if (formSteps[i]) {
          formSteps[i].classList.remove("active");
        }
      }
    });

    prevButton.disabled = active === 1;
    nextButton.disabled = active === steps.length;
  }

  function toggleForms(role) {
    sellerForm.style.display = role === "Seller" ? "block" : "none";
    buyerForm.style.display = role === "Buyer" ? "block" : "none";
    investorForm.style.display = role === "Investor" ? "block" : "none";
  }

  function toggleNextButton() {
    nextButton.disabled = !roleSelect.value;
  }

  nextButton.addEventListener("click", function () {
    if (roleSelect.value === "") {
      warningMessage.style.display = "block";
      return;
    }

    warningMessage.style.display = "none";

    if (currentStep === 0) {
      toggleForms(roleSelect.value);
      currentStep = 1;
    } else if (currentStep === 1) {
      formThree.classList.add("active");
      currentStep = 2;
    }

    active++;
    if (active > steps.length) {
      active = steps.length;
    }
    updateProgress();
  });

  prevButton.addEventListener("click", function () {
    if (currentStep > 0) {
      currentStep--;
      if (currentStep === 0) {
        toggleForms("");
      } else if (currentStep === 1) {
        formThree.classList.remove("active");
      }
    }

    active--;
    if (active < 1) {
      active = 1;
    }
    updateProgress();
  });

  roleSelect.addEventListener("change", function () {
    toggleForms(roleSelect.value);
    toggleNextButton();
  });

  function toggleNextButton() {
    if (roleSelect.value) {
      nextButton.disabled = false;
      warningMessage.style.display = "none";
    } else {
      nextButton.disabled = true;
      warningMessage.style.display = "block";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector(".btn-next");
  const roleSelect = document.getElementById("roleSelect");
  const warningMessage = document.getElementById("warningMessage");

  nextButton.addEventListener("click", function () {
    if (roleSelect.value === "") {
      warningMessage.style.display = "block";
    } else {
      warningMessage.style.display = "none";
    }
  });
});
