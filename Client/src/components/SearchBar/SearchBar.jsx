import style from '../SearchBar/search.module.css';
import { useState } from 'react';
import { BsSearchHeart} from "react-icons/bs";

function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };
   return (
      <div  className={style.conteiner}>
         <input type='search'  onChange = {handleChange} value={id} className={style.input}/>
         <button onClick={() => {onSearch(id)}} className={style.search}><BsSearchHeart/></button>
      </div>
   );
}

export default SearchBar;