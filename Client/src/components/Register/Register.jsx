import style from './register.module.css';
import imgLogin from '../../assets/img/img-login.webp';
import { useState } from 'react';
import validation from './validation';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from 'react-redux'; // Importa el hook useDispatch
import { registerUser } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const dispatch = useDispatch(); // Obtiene la función dispatch para despachar acciones
    const navigate = useNavigate()

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Nuevo estado para la confirmación de contraseña

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   // Verificar campos requeridos
   if (Object.keys(errors).length !== 0) {
    Swal.fire({
      icon: 'warning',
      text: 'Por favor, ingrese todos los datos requeridos.',
      position: 'top-center'
   });
 } else if (userData.password !== userData.confirmPassword) {
    setErrors({ ...errors, confirmPassword: "Las contraseñas no coinciden" });
 } else {
    // Llama a la acción "registerUser" pasando los datos de registro
    setErrors({ ...errors, confirmPassword: "" });
    dispatch(registerUser(userData));
    navigate('/')
 }
  };

  return (
    <div className={style.containerForm}>
      <div className={style.container}>
        <div>
          <img src={imgLogin} alt="" />
        </div>
        <form action="" className={style.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder='John Doe' value={userData.name} onChange={handleChange} />
            <p>{errors.name}</p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder='example@example.com' value={userData.email} onChange={handleChange} />
            <p>{errors.email}</p>
          </div>
          <div className=''>
            <label htmlFor="password">Password</label>
            <input type={passwordVisible ? 'text' : 'password'} name="password" placeholder='password' value={userData.password} onChange={handleChange} className={style.passwordInput} />
            <button
            type="button"
              className={style.eyes}
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >{confirmPasswordVisible ? <AiOutlineEyeInvisible className={style.icono} /> : <AiOutlineEye className={style.icono} />}</button>
            <p>{errors.password}</p>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type={passwordVisible ? 'text' : 'password'} name="confirmPassword" placeholder='confirm password' value={userData.confirmPassword} onChange={handleChange} className={style.passwordInput} />
            <div>

            <button
            type="button"
              className={style.eyes}
              onClick={() => setPasswordVisible(!passwordVisible)}
            >{passwordVisible ? <AiOutlineEyeInvisible className={style.icono} /> : <AiOutlineEye className={style.icono} />}</button>
            </div>
            <p>{errors.confirmPassword}</p>
          </div>
          <div>
          </div>
          <button type='submit' className={style.btn}>REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Register;