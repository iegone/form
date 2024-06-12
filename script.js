$("#bootstrapForm").submit(function (event) {
  event.preventDefault();
  var extraData = {};
  {
    /* Parsing input date id=1466160520 */
    var dateField = $("#1466160520_date").val();
    var timeField = $("#1466160520_time").val();
    let d = new Date(dateField);
    if (!isNaN(d.getTime())) {
      extraData["entry.1466160520_year"] = d.getFullYear();
      extraData["entry.1466160520_month"] = d.getMonth() + 1;
      extraData["entry.1466160520_day"] = d.getUTCDate();
    }
    if (timeField && timeField.split(":").length >= 2) {
      let values = timeField.split(":");
      extraData["entry.1466160520_hour"] = values[0];
      extraData["entry.1466160520_minute"] = values[1];
    }
  }
  $("#bootstrapForm").ajaxSubmit({
    data: extraData,
    dataType: "jsonp", // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
    error: function () {
      // Submit of form should be successful but JSONP callback will fail because Google Forms
      // does not support it, so this is handled as a failure.

      document.getElementById("popup").classList.add("open");
      document.querySelector(".black").style.display = "block";
      // You can also redirect the user to a custom thank-you page:
      // window.location = 'http://www.mydomain.com/thankyoupage.html'
    },
  });
});
function okBtn() {
  document.getElementById("popup").classList.remove("open");
  document.querySelector(".black").style.display = "none";
}

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

  propertySelected.addEventListener("change", function () {
    enterPriceDiv.style.display = this.value === "نعم" ? "block" : "none";
  });

  // Initial call to set the correct state on page load
  warningMessage.style.display = "none";
  toggleNextButton();
  updateProgress();
});
