"use strict";

// verify form
const form = document.getElementById("fullForm");

// form inputs
const fullNameInput = document.getElementById("fullName");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const preferredMethodInputs = document.getElementsByName("preferredMethod");
const commentsInput = document.getElementById("comments");

// error container
const errorContainer = document.getElementById("errorContainer");

// regex patterns
const nameRegex = /[A-Za-z]\s[A-Za-z]/i;
const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

// function to validate the form
function validateForm(event) {
 
  // clear any previous errors
  errorContainer = "";
  fullNameInput.classList.remove("error");
  phoneInput.classList.remove("error");
  emailInput.classList.remove("error");
  preferredMethodInputs[0].classList.remove("error");
  preferredMethodInputs[1].classList.remove("error");
  commentsInput.classList.remove("error");

  // initialize errors array
  let errors = [];
  
  // check to see if name matches the nameRegex
  if (!fullNameInput.value.match(nameRegex)) {
    errors.push("Please provide your full name.");
    fullNameInput.classList.add("error");
  }
  
  // check to see if phone matches phoneRegex
  if (phoneInput.value && !phoneInput.value.match(phoneRegex)) {
    errors.push("Invalid phone number.");
    phoneInput.classList.add("error");
  }

  // check to confirm there's an email match the regexEmail
  if (!emailInput.value.match(regexEmail) || emailInput.value === "") {
    errors.push("Invalid email address.");
    emailInput.classList.add("error");
  }
  
  // checking to see if preferred contact method was selected
  let isMethodSelected = false;
  for (let i = 0; i < preferredMethodInputs.length; i++) {
    if (preferredMethodInputs[i].checked) {
        isMethodSelected = true;
        break;
    }
  }
  if (!isMethodSelected) {
    errors.push("Please select a preferred method of contact.");
    preferredMethodInputs[0].classList.add("error");
    preferredMethodInputs[1].classList.add("error");
  }

  // checking to see if there is anything in the comments box
  if (commentsInput.value === "") {
    errors.push("Please leave a comment.");
    commentsInput.classList.add("error");
  }
  
  // check the amount of errors, if there are errors, display them in the error container
  if (errors.length > 0) {
    event.preventDefault();
    errors.forEach((error) => {
      const errorElement = document.createElement("p");
      errorElement.innerHTML = error;
      errorContainer.appendChild(errorElement);
    });
  }
}

// event listener for form
form.addEventListener("submit", validateForm);

// reset form
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    form.reset();
    errorContainer.innerHTML = "";
    fullNameInput.classList.remove("error");
    phoneInput.classList.remove("error");
    emailInput.classList.remove("error");
    preferredMethodInputs[0].classList.remove("error");
    preferredMethodInputs[1].classList.remove("error");
    commentsInput.classList.remove("error");
});