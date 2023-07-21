    //isFav ? removeFav(id) : addFav({id,name,status,gender,image}); setIsFav(!isFav); -> esto es un ternario.
    import style from "./card.module.css";
    import { Link, useLocation } from "react-router-dom";
    import { useDispatch, useSelector } from "react-redux"; // Importa los hooks necesarios
    import { useState, useEffect } from "react";
    import { addFav, removeFav } from "../../redux/actions/actions"; // Importa las acciones
    
    function Card({
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
      onClose,
    }) {
      const dispatch = useDispatch(); // Obtiene la función dispatch
      const myFavorites = useSelector((state) => state.myFavorites); // Obtiene el estado de myFavorites
      const [isFav, setIsFav] = useState(false);
      const location = useLocation()

    
      const handleFavorite = () => {
        if (isFav) {
          setIsFav(false);
          dispatch(removeFav(id)); // Utiliza la función dispatch para llamar a la acción removeFav
        } else {
          setIsFav(true);
          dispatch(addFav({ id, name, origin, status, image, species, gender})); // Utiliza la función dispatch para llamar a la acción addFav
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

        <button onClick={handleFavorite} className={style.btnfav}>
          {isFav ? "❤️" : "🤍"}
        </button>
        {location.pathname !== "/favorites" && ( <button
          onClick={() => {
            onClose(id);
          }}
          className={style.buttonX}
        >
          X
        </button>)}
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
};


export default Card;

//para funcion de clase
// const mapStateToProps = (state) => {
//    return {
//      myFavorites: state.myFavorites,
//   };
//  };

//  const mapDispatchToProps = (dispatch) => {
//   return {
//      addFav: (character) => {
//       dispatch(addFav(character));
//     },
//     removeFav: (id) => {
//       dispatch(removeFav(id));
//     },
//   };
//  };
