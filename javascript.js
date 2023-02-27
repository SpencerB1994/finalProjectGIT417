// verify form
let form = document.getElementById("fullForm");

function isFormValid(event) {
  
  const nameRegex = /[A-Za-z]\s[A-Za-z]/i;
  const errorList = document.getElementById("errorList");
  const name = document.querySelector("#fullName");
  const phone = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const radio = document.querySelector("prefferedMethod");
  const phoneRegex = /([A-Za-z0-9]+(-[A-Za-z0-9]+)+)/i;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  const comments = document.querySelector("#comments");
 
  // creating a list of errors
  let errors = [];
  
  errorList.classList.add("hide");
  name.classList.remove("error");
  email.classList.remove("error");
  phone.classList.remove("error");
  comments.classList.remove("error");
  
  // check to see if name matches the nameRegex
  if (!name.value.match(nameRegex)) {
    errors.push("Please provide your full name.");
    name.classList.add("error");
  }
  
  // check to see if phone matches phoneRegex
  if (!phone.value.match(phoneRegex)) {
    errors.push("Missing phone number.");
    phone.classList.add("error");
  }

  // check to confirm there's an email match the regexEmail
  if (!email.value.match(regexEmail)) {
    errors.push("Missing email address.");
    email.classList.add("error");
  }
  
  // check if one of the radio buttons were selected
  if (!radio === null) {
    errors.push("Please select a preferred method of contact.");
    radio.classList.add("error");
  }
  
  // checking to see if there is anything in the comments box
  if (!comments.length === 0) {
    errors.push("Please leave a comment.");
    comments.classList.add("error");
  }
  
  // check the amount of errors, if errors, then add them to a list
  if (errors.length > 0) {
    const errorList = document.querySelector("#errorList");
    errorList.classList.remove("hide");

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