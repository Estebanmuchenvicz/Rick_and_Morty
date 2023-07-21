import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import style from './favorites.module.css'
import { useState,} from "react";
import { filterCards, orderCards,} from "../../redux/actions/actions";

const Favorites = () => {
    const dispatch = useDispatch();
    const myFavorites = useSelector((state) => state.myFavorites)
    const [aux, setAux] = useState(false);
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    };

    const handleFilter= (event) => {
        dispatch(filterCards(event.target.value))
    };



    return(
<div>
    <div className={style.containerSelect}>
        <div>
        <select onChange={handleOrder} className={style.Select}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        </div>

        <div className="">
        <select onChange={handleFilter} className={style.Select}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">allCharacters</option>
        </select>
        </div>

    </div>
        <div className={style.contenedor}>
            {myFavorites.map(fav => {
                return(
                    <Card
                    key = {fav.id}
                    id= {fav.id}
                    name = {fav.name}
                    status = {fav.status}
                    gender = {fav.gender}
                    origin={fav.origin} 
                    species={fav.species} 
                    image={fav.image}
                    onClose={fav.onClose}
                    />
                )
            })}
        </div>
       </div>
    )
};



export default Favorites;

