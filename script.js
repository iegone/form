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


let pageHistory = "0"; // Start with the first page

function goToNextPage(currentPage) {
  // Append the current page to the pageHistory
  pageHistory += `,${currentPage}`;

  // Logic to navigate to the next page
}

function submitForm() {
  // Include pageHistory with the form data
  const formData = {
    // other form fields
    pageHistory: pageHistory,
  };

  // Submit formData to the server
}

// This script requires jQuery and jquery-form plugin
// You can use these ones from Cloudflare CDN:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js" integrity="sha256-2Pjr1OlpZMY6qesJM68t2v39t+lMLvxwpa8QlRjJroA=" crossorigin="anonymous"></script>
//
$('#bootstrapForm').submit(function (event) {
    event.preventDefault()
    var extraData = {}
    {
        /* Parsing input date id=1466160520 */
        var dateField = $("#1466160520_date").val()
        var timeField = $("#1466160520_time").val()
        let d = new Date(dateField)
        if (!isNaN(d.getTime())) {
            extraData["entry.1466160520_year"] = d.getFullYear()
            extraData["entry.1466160520_month"] = d.getMonth() + 1
            extraData["entry.1466160520_day"] = d.getUTCDate()
        }
        if (timeField && timeField.split(':').length >= 2) {
            let values = timeField.split(':')
            extraData["entry.1466160520_hour"] = values[0]
            extraData["entry.1466160520_minute"] = values[1]
        }
    }
    $('#bootstrapForm').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.
            alert('Form Submitted. Thanks.')
            // You can also redirect the user to a custom thank-you page:
            // window.location = 'http://www.mydomain.com/thankyoupage.html'
        }
    })
})