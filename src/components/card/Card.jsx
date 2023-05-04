import style from './card.module.css'

function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={style.card}>
         <button onClick={()=> {onClose(id)}} className={style.buttonX}>X</button>
         <br />
         <img src={image} alt='' className={style.cardImage}/> 
         <h2 className={style.name}>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
      </div>
   );
}

export default Card;