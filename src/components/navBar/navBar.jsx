import SearchBar from "../SearchBar/SearchBar";
import style from '../navBar/nav.module.css'
import { Link } from "react-router-dom";



function NavBar({onSearch}) {
   
    return(
        <div className={style.nav}>
           <div className={style.menu}> 
            {/* <h1 className={style.title}></h1> */}
            <Link to='/home'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" alt="" className={style.logo}/>
            </Link>
           
            <ul className={style.listmenu }>
                <li>
                <Link to='/home' className={style.listmenulink }>Home</Link>
                </li>
                <li>
                <Link to='/about' className={style.listmenulink }>About</Link>
                </li>
                <li>
                <Link to='/favorites' className={style.listmenulink }>Favorites</Link>
                </li>
                
                
            </ul>
            
           </div>
            <SearchBar onSearch={onSearch}/>


        </div>
    )
};

export default NavBar;