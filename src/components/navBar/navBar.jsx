import SearchBar from "../SearchBar/SearchBar";
import style from '../navBar/nav.module.css'

function NavBar({onSearch}) {
    return(
        <div className={style.nav}>
           <div className={style.menu}> 
            <h1 className={style.title}>R&M</h1>
           <ul className={style.listmenu }>
            <li>inicio</li>
            <li>favoritos</li>
            <li>odenar</li>
           </ul>
           </div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
};

export default NavBar;