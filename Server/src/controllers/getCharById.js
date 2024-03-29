const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res)=> {
    try {
        const {id} = req.params;

        const {data} = await axios(`${URL}/${id}`)

            let character ={
            id: data.id,
            name: data.name, 
            gender: data.gender, 
            species: data.species, 
            origin: data.origin, 
            image: data.image, 
            status: data.status,
        }
        return res.status(200).json(character)
         
    
    } catch (error) {
        
        res.status(400).json({error: error.message});
    }


};

module.exports= {
    getCharById
}