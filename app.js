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

const validateCountry = () => {
  const country = document.querySelector("#country");
  const countryError = document.querySelector("#country + span.error");

  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  }

  showCountryError();
};

const showCountryError = () => {
  const country = document.querySelector("#country");
  const countryError = document.querySelector("#country + span.error");

  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a country name.";
  } else if (country.validity.typeMismatch) {
    countryError.textContent = "Entered value needs to be a country name.";
  } else if (country.validity.tooShort) {
    countryError.textContent = `Country name should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
  }
  countryError.className = "error";
};

const validateZip = () => {
  const zip = document.querySelector("#zip");
  const zipError = document.querySelector("#zip + span.error");

  if (zip.validity.valid) {
    zipError.textContent = "";
    zipError.className = "error";
  }

  showZipError();
};

const showZipError = () => {
  const zip = document.querySelector("#zip");
  const zipError = document.querySelector("#zip + span.error");

  if (zip.validity.valueMissing) {
    zipError.textContent = "You need to enter a zip code.";
  } else if (zip.validity.typeMismatch) {
    zipError.textContent = "Entered value needs to be a zip code.";
  } else if (zip.validity.tooShort) {
    zipError.textContent = `Zip code should be at least ${zip.minLength} characters; you entered ${zip.value.length}.`;
  }
  zipError.className = "error";
};

const validatePassword = () => {
  const password = document.querySelector("#password");
  const passwordError = document.querySelector("#password + span.error");

  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  }

  showPasswordError();
};

const showPasswordError = () => {
  const password = document.querySelector("#password");
  const passwordError = document.querySelector("#password + span.error");

  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.typeMismatch) {
    passwordError.textContent = "Entered value needs to be a password.";
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
  passwordError.className = "error";
};

const validateConfirmPassword = () => {
  const confPassword = document.querySelector("#conf-password");
  const confPasswordError = document.querySelector(
    "#conf-password + span.error"
  );

  if (confPassword.validity.valid) {
    confPasswordError.textContent = "";
    confPasswordError.className = "error";
  }

  showConfPasswordError;
};

const showConfPasswordError = () => {
  const confPassword = document.querySelector("#conf-password");
  const password = document.querySelector("#password");
  const confPasswordError = document.querySelector(
    "#conf-password + span.error"
  );

  if (!(confPassword.value === password.value)) {
    confPasswordError.textContent = "The passwords do not match.";
  }

  confPasswordError.className = "error";
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

  country.addEventListener("input", (e) => {
    validateCountry();
  });

  zip.addEventListener("input", (e) => {
    validateZip();
  });

  password.addEventListener("input", (e) => {
    validatePassword();
  });

  confPassword.addEventListener("input", (e) => {
    validateConfirmPassword();
  });

  form.addEventListener("submit", function (e) {
    if (!email.validity.valid) {
      validateEmail();
      e.preventDefault();
    }
    if (!country.validity.valid) {
      validateCountry();
      e.preventDefault();
    }
    if (!zip.validity.valid) {
      validateZip();
      e.preventDefault();
    }
    if (!password.validity.valid) {
      validatePassword();
      e.preventDefault();
    }
    if (!confPassword.validity.valid) {
      validateConfirmPassword();
      e.preventDefault();
    }
  });
})();
