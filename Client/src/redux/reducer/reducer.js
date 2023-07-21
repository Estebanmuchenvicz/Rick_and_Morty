import { ADD_FAV, FILTER, GET_FAV, ORDER, REMOVE_FAV, LOGIN_USER,LOGOUT_USER, REGISTER_FAILURE, REGISTER_SUCCESS } from "../actions/actions-type";


const initialState = {
    myFavorites: [],
    allCharacters: [],
    isLoggedIn: false,
    userId: null,
    user: null,
    error: null,
};


const reducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case GET_FAV: return{
            ...state,
            myFavorites: [...payload],
            allCharacters: [...payload]
        }

        case ADD_FAV:
            return{
                ...state, 
				myFavorites: [...state.myFavorites, payload],
				allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV: 
        let stateCopy = [...state.allCharacters];
        let filtrados = stateCopy.filter((char) => char.id !== payload);
        return {
          ...state,
          myFavorites: filtrados,
          allCharacters: filtrados,
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

        case LOGIN_USER:
            return {
              ...state,
              isLoggedIn: true,
              userId: payload,
            };
        case LOGOUT_USER:
            return {
                initialState
            };

            case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        error: payload,
      };
            
    
        default: return{...state}
    }
}

export default reducer;