import axios from "axios";
import {useEffect, useState} from 'react';
import { useParams, Link, useHistory} from "react-router-dom";
import style from './detail.module.css';
import Swal from "sweetalert2";




const Detail = ()=> { 
    const {id} = useParams()
    const [character, setCharacter] = useState({});
    const history = useHistory(); // Obtenemos la instancia de history

    useEffect(() => {
        axios(`/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
            Swal.fire({
               icon: 'error',
               text: '¡No hay personajes con este ID! Puede buscar del 1 al 826.'
             });
           }
        });
        return setCharacter({});
     }, [id]);

     const handleGoBack = () => {
      history.goBack(); // Regresamos a la página anterior en el historial del navegador
    };

     return(
      <div className={style.sectionDetail}>
        <div className={style.containerDetail}>

                    <div className={style.containerinfo}>
                        <div className= {style.info}>
                        <h2>Name: {character.name && character.name}</h2>
                        <p>Status: {character.status && character.status}</p>
                        <p>Species: {character.species && character.species}</p>
                        <p>Gender: {character.gender && character.gender}</p>
                        <p>Origin: {character.origin?.name && character.origin?.name}</p>
                          <Link to='/home'>
                             <button className={style.btn} onClick={handleGoBack}>VOLVER</button>
                          </Link>
                        </div>

                    <div className={style.img}>
                    <img src={character.image && character.image} alt='img'/>
                    </div>
                    
                    </div>
                    

        </div>
        </div>
     )
};

export default Detail;
