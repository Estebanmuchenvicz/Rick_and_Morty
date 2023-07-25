import axios from "axios";
import {useEffect, useState} from 'react';
import { useParams, Link} from "react-router-dom";
import style from './detail.module.css'



const Detail = ()=> { 
    const {id} = useParams()
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

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
                             <button className={style.btn}>VOLVER</button>
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
