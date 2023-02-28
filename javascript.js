"use strict";

// verify form
const form = document.getElementById("fullForm");

// function to validate the form
function isFormValid(event) {

    // form inputs
    const name = document.querySelector("#fullName");
    const phone = document.querySelector("#phone");
    const email= document.querySelector("#email");
    const preferredMethodInputs = document.getElementsByName("preferredMethod");
    const comments = document.querySelector("#comments");
    const errorList = document.getElementById("errorList");

    // initialize errors array
    let errors = [];
    errorList.classList.add("hide");
    name.classList.remove("error");
    email.classList.remove("error");
    phone.classList.remove("error");
    comments.classList.remove("error");

    // regex patterns
    const nameRegex = /[A-Za-z]\s[A-Za-z]/i;
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
 
    // clear any previous errors
    errorContainer = "";
    name.classList.remove("error");
    phone.classList.remove("error");
    email.classList.remove("error");
    comments.classList.remove("error");
    
    // check to see if name matches the nameRegex
    if (!name.value.match(nameRegex)) {
        errors.push("Please provide your full name.");
        name.classList.add("error");
    }
    
    // check to see if phone matches phoneRegex
    if (!phoneInput.value.match(phoneRegex)) {
        errors.push("Invalid phone number.");
        phone.classList.add("error");
    }

    // check to confirm there's an email match the regexEmail
    if (!emailInput.value.match(regexEmail) || emailInput.value === "") {
        errors.push("Invalid email address.");
        email.classList.add("error");
    }
    
    // check if one of the radio buttons were selected
    const radio1 = document.getElementById("selectedPhone");
    const radio2 = document.getElementById("selectedEmail");

    if (!radio1.checked && !radio2.checked) {
        errors.push("Please select a preferred method of contact.");
        radio1.classList.add("error");
        radio2.classList.add("error");
    }

    // checking to see if there is anything in the comments box
    if (comments.value === "") {
        errors.push("Please leave a comment.");
        comments.classList.add("error");
    }
  
    // check the amount of errors, if there are errors, display them in the error container
    if (errors.length > 0) {
        const errorList = document.querySelector("#errorList");
        errorList.classList.remove("hide");
        errors.forEach((error) => {
          const li = document.createElement("li");
          li.innerHTML = error;
          errorList.appendChild(li);
        });
    }
}

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

function toggleImage() {
    let img = document.getElementById("image");
    
    if (img.src.endsWith("sunny.png")) {
        img.src = "images/lou-pines-logo.png";
    } else {
        img.src = "images/sunny.png";
    }
    return false;
}
    
function toggleMode() {
    let body = document.getElementsByTagName("body")[0];
    
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
}

function randomNum() {
    let randNum = Math.floor(Math.random() * 10) + 1;
    let numInput = document.getElementById("userInput");
    let userInput = Number(numInput.value);
    let output = document.getElementById("message");
    
    if (randNum === userInput) {
      output.innerHTML = "You've won a $7 discount!";
    } else (randNum !== userInput) {
      output.innerHTML = "Sorry no discounts for you. Try again!";
    }
    event.preventDefault();
    output = "";
  }

// event listener for form
form.addEventListener("submit", isFormValid);

// event listener for random number generator
document.getElementById("submitButton").addEventListener("click", randomNum);