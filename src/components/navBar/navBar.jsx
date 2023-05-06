import SearchBar from "../SearchBar/SearchBar";
import style from '../navBar/nav.module.css'
import { Link } from "react-router-dom";

function NavBar({onSearch}) {
    return(
        <div className={style.nav}>
           <div className={style.menu}> 
            <h1 className={style.title}>R&M</h1>
            <ul className={style.listmenu }>
                <li>
                <Link to='/home' className={style.listmenulink }>Home</Link>
                </li>
                <li>
                <Link to='/about' className={style.listmenulink }>About</Link>
                </li>
                
                
            </ul>
            
           </div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
};

export default NavBar;