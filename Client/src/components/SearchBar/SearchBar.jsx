import style from '../SearchBar/search.module.css';
import { useState } from 'react';
import { BsSearchHeart} from "react-icons/bs";
import Swal from 'sweetalert2';

function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };

   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         handleSearch();
      }
   };

   const handleSearch = () => {
      const num = parseInt(id, 10); // Convierte el valor a un número entero

      if (isNaN(num) || num < 1 || num > 826) {
         Swal.fire({
            icon: 'warning',
            text: 'Debe ingresar un número del 1 al 826',
            position: 'top-center'
         });
      } else {
         onSearch(num); // Ejecuta la búsqueda con el valor actual del input
         setId(''); // Limpia el input después de realizar la búsqueda
      }
   };
   return (
      <div  className={style.conteiner}>
         <input type='search' onKeyDown={handleKeyDown}  onChange = {handleChange} value={id} className={style.input} placeholder='Ingresa un número del 1 al 826'/>
         <button onClick={handleSearch} className={style.search}><BsSearchHeart/></button>
      </div>
   );
}

export default SearchBar;