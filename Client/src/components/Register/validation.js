const regexEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}/;
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

const validation = ({ name, email, password, confirmPassword }) => {
  const errors = {};

  if (!name) errors.name = "Por favor complete este campo...";
  if (name.length > 50) errors.name = "Su nombre no debe tener más de 50 caracteres";

  if (!regexEmail.test(email)) errors.email = "Su email";
  if (!email) errors.email = "Por favor complete este campo...";
  if (email.length > 35) errors.email = "Su correo electrónico no debe tener más de 35 caracteres";

  if (!regexPass.test(password))
    errors.password =
      "La contraseña debe tener al menos un número, una letra mayúscula y una letra minúscula.";
  if (password.length < 6 || password.length > 10)
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  if (password.length === 0) errors.password = "Por favor complete este campo...";
  
  if (confirmPassword !== password) errors.confirmPassword = "Las contraseñas deben coincidir";
  
  return errors;
};

export default validation;

