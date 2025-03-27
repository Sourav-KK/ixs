const form = document.getElementById("contact-form");

const formDetails = [
  {
    elName: "form-name",
    errElName: "form_err_name",
    minLength: 3,
    maxLength: 22,
    emptyError: "This field is required",
    lengthError: "Should contain 3-22 characters",
    regex: /^[A-Za-z\s]+$/,
    regexErr: "Should contain only alphabets",
  },
  {
    elName: "form-email",
    errElName: "form_err_email",
    minLength: 10,
    maxLength: 25,
    emptyError: "This field is required",
    lengthError: "Should contain 10-25 characters",
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    regexErr: "Please enter a valid email",
  },
  {
    elName: "formSubject",
    errElName: "form_err_subject",
    minLength: 5,
    maxLength: 50,
    emptyError: "This field is required",
    lengthError: "Should contain 5-30 characters",
    regex: null,
    regexErr: null,
  },
  {
    elName: "formMessage",
    errElName: "form_err_message",
    minLength: 10,
    maxLength: 500,
    emptyError: "This field is required",
    lengthError: "Should contain 10-100 characters",
    regex: null,
    regexErr: null,
  },
];

const validateField = (field, value) => {
  if (value.length === 0) {
    return field.emptyError;
  }

  if (value.length < field.minLength || value.length > field.maxLength) {
    return field.lengthError;
  }

  if (field.regex && !field.regex.test(value)) {
    return field.regexErr;
  }

  return null; // No error
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  // Loop through each field to validate
  formDetails.forEach((field) => {
    const fieldElement = document.getElementById(field.elName);
    const value = fieldElement.value.trim();

    // Validate the field
    const validationErr = validateField(field, value);

    // If there's an error, handle it
    const errElement = document.getElementById(field.errElName);
    if (validationErr) {
      isValid = false;

      if (errElement) {
        errElement.innerText = validationErr; // Set the error message to the error element
      } else alert("Form could not be submitted. Please try again");
    } else {
      errElement.innerText = ""; // Clear the error message if input is valid
    }
  });

  // Only submit the form if all fields are valid
  if (isValid) {
    // Log form values here (optional)
    const formData = formDetails.reduce((acc, field) => {
      const fieldElement = document.getElementById(field.elName);
      acc[field.elName] = fieldElement.value.trim();
      return acc;
    }, {});

    formData.form_name;
    console.log("Form Data:", formData); // Log the form values // log form values here
  }
});

function toUpper(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      console.log("First capital letter: " + word[0]);
      console.log("remain letters: " + word.substr(1));
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
