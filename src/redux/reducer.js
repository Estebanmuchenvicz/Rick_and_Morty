import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-type";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};


const reducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return{
                ...state, myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV: return{
            ...state, myFavorites: state.myFavorites.filter(fav => fav.id !== Number(payload)) //Esto filtra el id del personaje verifica si es diferente lo pasa a Number recorre y elimina de fav
        }

        case FILTER:
            const allCharactersFiltred = state.allCharacters.filter(character => character.gender === payload);
            return{
            ...state, myFavorites: 
            payload === 'allCharacters' ? [...state.allCharacters] : allCharactersFiltred
        }

        case ORDER: 
        const allCharactersCopy = [...state.allCharacters]
        return{
            ...state, myFavorites: payload === "A" ? allCharactersCopy.sort((a,b) => a.id - b.id) : allCharactersCopy.sort((a,b) => b.id - a.id)
        }
            
    
        default: return{...state}
    }
}

export default reducer;