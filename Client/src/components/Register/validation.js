const regexEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}/;
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

const validation = ({ name, email, password, confirmPassword }) => {
  const errors = {};

  if (!name) errors.name = "Please complete this field...";
  if (name.length > 50) errors.name = "Your name must not be longer than 50 characters";

  if (!regexEmail.test(email)) errors.email = "Your username must be an email";
  if (!email) errors.email = "Please complete this field...";
  if (email.length > 35) errors.email = "Your username must not be longer than 35 characters";

  if (!regexPass.test(password))
    errors.password =
      "The password must have at least one number, one uppercase letter, and one lowercase letter.";
  if (password.length < 6 || password.length > 10)
    errors.password = "Password must be between 6 and 10 characters";
  if (password.length === 0) errors.password = "Please complete this field...";
  
  if (confirmPassword !== password) errors.confirmPassword = "Passwords must match";
  
  return errors;
};

export default validation;

