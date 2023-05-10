import Card from "../card/Card";
import { connect } from "react-redux";
import style from './favorites.module.css'

const Favorites = ({myFavorites}) => {
    return(
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
    )
};

const mapStateToProps = (state) =>{
    return{myFavorites: state.myFavorites}
}

export default connect(
    mapStateToProps,
    null
)(Favorites);