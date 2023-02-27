// verify form
let form = document.getElementById("fullForm");

function isFormValid(event) {
  
  const nameRegex = /[A-Za-z]\s[A-Za-z]/i;
  const errorList = document.getElementById("errorList");
  const name = fullName.value;
  const phone = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const radio = document.querySelector("prefferedMethod");
  const phoneRegex = /([A-Za-z0-9]+(-[A-Za-z0-9]+)+)/i;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  // creating a list of errors
  let errors = [];
  
  errorList.classList.add("hide");
  name.classList.remove("error");
  email.classList.remove("error");
  
  // event.preventDefault();
  
  // check to see if name matches the nameRegex
  if (!name.value.match(nameRegex)) {
    errors.push("Please provide your full name.")
  }
  
  // check to see if phone matches phoneRegex
  if (!phone.value.match(phoneRegex)) {
    errors.push("Invalid or missing phone number.");
  }

  // check to confirm there's an email match the regexEmail
  if (!email.value.match(regexEmail)) {
    errors.push("Invalid or missing email address.");
    email.classList.add("error");
  }
  
  if (!radio === null) {
    errors.push("Please select a preferred method of contact.")
    radio.classList.add("error");
  }
  
  if (errors.length > 0) {
    formErrors.classList.remove("hide");
    const errorList = document.querySelector("#errorList");
    // errorList.innerHTML = "";
    errors.forEach((error) => {
      const li = document.createElement("li");
      li.innerHTML = error;
      errorList.appendChild(li);
    });
  }
}

document.getElementById("submit").addEventListener("click", function(event) {
    isFormValid();
    event.preventDefault();
});