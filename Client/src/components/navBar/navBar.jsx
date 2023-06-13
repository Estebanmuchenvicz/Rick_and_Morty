import SearchBar from "../SearchBar/SearchBar";
import style from "../navBar/nav.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
// import { useState } from "react";

function NavBar({ onSearch }) {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () =>{
  //     setMenu(!menu);
  // }

  return (
    <header className={style.nav}>
      {/* <h1 className={style.title}></h1> */}
      <Link to="/home">
        <img src={logo} alt="logo" className={style.logo} />
      </Link>
      {/* <button onClick={toggleMenu} className={style.menuMobil}>
           <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
           </button> */}

      <div className={style.menu}>
        <div>
          <ul className={style.listmenu}>
            <li>
              <Link to="/home" className={style.listmenulink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={style.listmenulink}>
                About
              </Link>
            </li>
            <li>
              <Link to="/favorites" className={style.listmenulink}>
                Favorites
              </Link>
            </li>
          </ul>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
}

export default NavBar;
