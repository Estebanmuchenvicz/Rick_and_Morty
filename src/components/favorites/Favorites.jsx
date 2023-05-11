import Card from "../card/Card";
import { connect, useDispatch } from "react-redux";
import style from './favorites.module.css'
import { useState } from "react";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();
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
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        </div>

        <div className="">
        <select onChange={handleFilter}>
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
                    image={fav.image}
                    />
                )
            })}
        </div>
       </div>
    )
};

const mapStateToProps = (state) =>{
    return{myFavorites: state.myFavorites}
}

export default connect(
    mapStateToProps,
    null
)(Favorites);

