import Card from './Card';

function Cards({characters}) {
   return(
      <div>
         {characters.map(({id,name,status,species,gender,origin,image,onClose}) => {
           return(
            <Card
            key = {id}
            name = {name}
            status = {status}
            species = {species}
            gender = {gender}
            origin = {origin.name}
            image = {image}
            onClose = {() => window.alert('Emulamos que se cierra la card')}
            />
           ) 
         })}
      </div>
   );
};

export default Cards;