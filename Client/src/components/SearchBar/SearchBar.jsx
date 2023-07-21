import style from '../SearchBar/search.module.css';
import { useState } from 'react';
import { BsSearchHeart} from "react-icons/bs";

function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };

   const handleSearch = () => {
      onSearch(id); // Ejecuta la búsqueda con el valor actual del input
      setId(''); // Limpia el input después de realizar la búsqueda
    };
   return (
      <div  className={style.conteiner}>
         <input type='search'  onChange = {handleChange} value={id} className={style.input}/>
         <button onClick={handleSearch} className={style.search}><BsSearchHeart/></button>
      </div>
   );
}

export default SearchBar;