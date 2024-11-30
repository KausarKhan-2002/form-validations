let email = document.getElementById("email");
let password = document.getElementById("password");
let displayEmail = document.querySelector(".displayEmail");
let displayPassword = document.querySelector(".displayPassword");
let submit = document.getElementById("submit");
let checkBox = document.querySelectorAll(".checkBox");
let errorFree = document.querySelector(".errorFree");

// This function will handle all the visibility properties 
const handleVisibility = (ele, value) => {
  ele.style.visibility = value;
};

// It will submit the data if user cross validation
submit.addEventListener("click", () => {
  if (!email.value.includes("@gmail.com")) {
    handleVisibility(displayEmail, "visible");
  }

  if (password.value.length <= 8) {
    handleVisibility(displayPassword, "visible");
  }

  if (email.value.includes("@gmail.com")) {
    handleVisibility(displayEmail, "hidden");
  }

  if (password.value.length > 8) {
    handleVisibility(displayPassword, "hidden");
  }

  if (email.value.includes("@gmail.com") && password.value.length > 8) {
    errorFree.classList.remove("displayErrorFree");
    errorFree.style.fontSize = "1rem";

    setTimeout(() => {
      errorFree.classList.add("displayErrorFree");
    }, 2000);
  }

  // After submission it will remove the text from input boxes
  email.value = ""
  password.value = ""

  // This function will reset the style of input box
  const resetInputStyles = (input) => {
    input.style.color = "rgb(61, 200, 255)"
    input.style.borderBottom = "1px solid rgb(61, 200, 255)";
  }
  resetInputStyles(email)
  resetInputStyles(password)

  checkBox[0].classList.remove("addCheck1");
  checkBox[1].classList.remove("addCheck2");
});

// On change handler will take care of styles, border, check, and validations so that user can undertand acceptance criteria of form before submsstion.
function handleInput(input) {
  if (input.id == "email") {
    if (input.value.includes("@gmail.com") && input.value.length > 3) {
      input.style.borderBottom = "1px solid green";
      input.style.color = "green";
      checkBox[0].classList.add("addCheck1");
      displayEmail.style.visibility = "hidden";
    } else {
      input.style.borderBottom = "1px solid rgb(61, 200, 255)";
      input.style.color = "rgb(61, 200, 255)";
      checkBox[0].classList.remove("addCheck1");
    }
  } else {
    if (input.value.length > 8) {
      input.style.borderBottom = "1px solid green";
      input.style.color = "green";
      checkBox[1].classList.add("addCheck2");
      displayPassword.style.visibility = "hidden";
    } else {
      input.style.borderBottom = "1px solid rgb(61, 200, 255)";
      input.style.color = "rgb(61, 200, 255)";
      checkBox[1].classList.remove("addCheck2");
    }
  }
}

email.addEventListener("input", () => {
  handleInput(email);
});

password.addEventListener("input", () => {
  handleInput(password);
});
