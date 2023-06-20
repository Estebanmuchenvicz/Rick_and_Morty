import style from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  //   const dispatch = useDispatch();
  //   const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    //isFav ? removeFav(id) : addFav({id,name,status,gender,image}); setIsFav(!isFav); -> esto es un ternario.
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, gender, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      <div className={style.btn}>
        {/* {
            isFav ? (
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
                  )
               } */}
        <button onClick={handleFavorite} className={style.btnfav}>
          {isFav ? "❤️" : "🤍"}
        </button>
        <button
          onClick={() => {
            onClose(id);
          }}
          className={style.buttonX}
        >
          X
        </button>
      </div>

      <div className={style.contenedorinfo}>
        <Link to={`/detail/${id}`} className={style.link}>
          <img src={image} alt="" className={style.cardImage} />
          <h2 className={style.name}>Name: {name}</h2>
          <h2>Status: {status}</h2>
          {/* <h2>Species: {species}</h2> */}
          <h2>Gender: {gender}</h2>
          {/* <h2>Origin: {origin}</h2> */}
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
