import style from './form.module.css'
import imgLogin from '../../assets/img/img-login.webp'
import {useState} from 'react'
import validation from './validation';
const Form = ({login})=>{
    const [userData, setUserData] = useState({email:'', password:''});
    const [errors, setErrors] = useState({email:'', password:''});
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})
        validation({...userData, [property]: value}, errors, setErrors);

    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        login(userData);
        setLoggedIn(true);
    }

    function handleLogout() {
        setLoggedIn(false);
      }
    return(
        <div className={style.container}>
            <div>
                <img src={imgLogin} alt="" />
            </div>
        <form action="" className={style.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder='example@example.com' value={userData.email} onChange={handleChange}/>
                <p>{errors.email}</p>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='password' name="password" placeholder='password' value={userData.password} onChange={handleChange}/>
                <p>{errors.password}</p>
            </div>
            <div>

            </div>
            <button type='submit' className={style.btn}>SUBMIT</button>
        </form>
        {loggedIn && (
        <button onClick={handleLogout} className={style.btn}>
          Cerrar sesión
        </button>
      )}
        </div>

    )
};

export default Form;
