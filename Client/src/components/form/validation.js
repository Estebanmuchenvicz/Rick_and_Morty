
const validation = (userData,errors,setErrors)=>{
    
        if(!userData.email) setErrors({...errors, email: "Debe ingresar el email"});
        else if (userData.email > 35) setErrors({...errors, email: "El email no debe superar los 35 caracteres"});
        else if(!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}/.test(userData.email)) setErrors({...errors, email: "Email inválido"})
        else{
            setErrors({...errors, email: ""});
        }

        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(userData.password))
        errors.password =
          "The password must have at least one number, one uppercase letter, and one lowercase letter.";
        if(userData.password.length < 6 || userData.password.length > 10) setErrors({...errors, password: "El password debe contener entre 6 y 10 caracteres"});
        else if(!/\d/.test(userData.password)){
            setErrors({...errors, password: "Debe contener al menos un número"});
        } else{
            setErrors({...errors, password: ""});
        }
    
}

export default validation;