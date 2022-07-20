const validateEmail = () => {
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#email + span.error");

  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  }

  showEmailError();
};

const showEmailError = () => {
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#email + span.error");

  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = "error";
};

(() => {
  const form = document.getElementsByTagName("form")[0];
  const email = document.querySelector("#email");
  const country = document.querySelector("#country");
  const zip = document.querySelector("#zip");
  const password = document.querySelector("#password");
  const confPassword = document.querySelector("#conf-password");

  email.addEventListener("input", (e) => {
    validateEmail();
  });
})();
