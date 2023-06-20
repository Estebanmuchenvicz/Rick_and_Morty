import style from './form.module.css'
import imgLogin from '../../assets/img/img-login.webp'
import {useState} from 'react'
import validation from './validation';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Form = ({login})=>{
    const [userData, setUserData] = useState({email:'', password:''});
    const [errors, setErrors] = useState({email:'', password:''});
    const [passwordVisible, setPasswordVisible] = useState(false);
    

    const handleChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})
        validation({...userData, [property]: value}, errors, setErrors);

    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        login(userData);
        
    }





    return(
        <div className={style.containerForm}>
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
            <div className=''>
                <label htmlFor="password">Password</label>
                <input type={passwordVisible ? 'text' : 'password'} name="password" placeholder='password' value={userData.password} onChange={handleChange} className={style.passwordInput}/>
                <button
                 className={style.eyes}
                 onClick={() => setPasswordVisible(!passwordVisible)}
                >{passwordVisible ? <AiOutlineEyeInvisible className={style.icono}/> : <AiOutlineEye className={style.icono}/>}</button>
                <p>{errors.password}</p>
            </div>
            <div>

            </div>
            <button type='submit' className={style.btn}>SUBMIT</button>
        </form>
  
        </div>
        </div>
    )
};

export default Form;
