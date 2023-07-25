import SearchBar from "../SearchBar/SearchBar";
import "../navBar/nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRandom} from "react-icons/fa";
import { FiLogOut} from "react-icons/fi";
import { useState} from "react";
import {logoutUser} from "../../redux/actions/actions"
import {  useDispatch } from 'react-redux';

function NavBar({ onSearch, Random  }) {
  const navigate = useNavigate()
  const location = useLocation();
  const isAboutOrFavorites =
    location.pathname === "/about" || location.pathname === "/favorites";

    const handleRandom = () => {
      Random();
    };
 const [menu, setMenu] = useState(false);

   const toggleMenu = () =>{
    setMenu( !menu )
   }

   
   const dispatch = useDispatch();
 
   const handleLogout = () => {
    console.log('Clicked Logout Button');
     // Despacha la acción de logout para actualizar el estado de autenticación a false
     dispatch(logoutUser());
     navigate("/");
     // Otras acciones que puedas necesitar al cerrar sesión (por ejemplo, limpiar el estado)
   };
 



  return (
    <header className="nav">
  
      <Link to="/home">
        <img src={logo} alt="logo" className='logo'/>
      </Link>
      
     <button onClick={toggleMenu} className='menuMobil'>
           <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
           </button>
      
      
      <div className={ `menuGeneral ${ menu ? 'isActive' : '' }` }>

      <div className={ `menu ${ menu ? 'isActive' : '' }` }>
        <div>
          <ul className='listmenu'>
            <li>
              <Link to="/home" className='listmenulink' onClick={toggleMenu}>
                Home
              </Link>
            </li>
           
            <li>
            <Link to="/about" className='listmenulink' onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/favorites" className='listmenulink' onClick={toggleMenu}>
                Favorites
              </Link>
            </li>
          </ul>

        </div>
        {!isAboutOrFavorites && (
          <div className={ `addCharacter ${ menu ? 'isActive' : '' }` }>
          <div>
            <SearchBar onSearch={onSearch} />
            </div>
            <div>
        <button className={ `buttonRandom ${ menu ? 'isActive' : '' }` } onClick={handleRandom}>
        <FaRandom/>
        </button>
          </div>
          </div>
        )}
        
      </div>
      
    <div>
    
      <FiLogOut type="button" className="logautBtn" onClick={handleLogout}/>
  
  </div>
  

      </div>
    </header>
  );
}

export default NavBar;
