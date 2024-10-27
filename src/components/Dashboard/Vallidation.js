export default function Validation(values) {
  const errors = {};
  const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;

    
  if (values.username === "") {
    errors.username = "Email is required*";
  } else {
    if (!email_pattern.test(values.username)) {
      errors.username = "Email is not match";
    } else {
      errors.username = "";
    }
  }

  if (values.password === "") {
    errors.password = "Password is required*";
  } else {
    if (!password_pattern.test(values.password)) {
      errors.password = "Password is not match";
    } else {
      errors.password = "";
    }
  }
  if (values.phoneno === "") {
    errors.phoneno = "Phone number is required*";
  } else if (values.phoneno.toString().length < 10) {
    errors.phoneno = "Phone Number must be 10 digit";
  }

  if (values.country === "") {
    errors.country = "country is required*";
  }

  if (values.state === "") {
    errors.country = "State is required*";
  }

  return errors;
}
