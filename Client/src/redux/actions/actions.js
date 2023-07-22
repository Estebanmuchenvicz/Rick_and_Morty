import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, LOGOUT_USER, GET_FAV, LOGIN_USER, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actions-type";
import axios from 'axios';

const getUserId = () => {
  return localStorage.getItem('userId');
};

export const addFav = (character) =>{
        const endpoint = '/rickandmorty/fav';
        return async (dispatch) => {
         try {
          const userId = getUserId();
          if (!userId) {
            console.error('Usuario no autenticado');
            return;
          }
				const { data } = await axios.post(endpoint, {...character, userId});
				return dispatch({
					type: ADD_FAV,
					payload: data,
				})
		} catch (error) {
			console.error(error.message);
		}
           
        };
     
};

export const removeFav = (id) =>{
    const endpoint = `/rickandmorty/fav/${id}?`;
    return async (dispatch) => {
		try {
      const userId = getUserId();
      if (!userId) {
        console.error('Usuario no autenticado');
        return;
      }

      await axios.delete(endpoint + `userId=${ userId }` );
         return dispatch({
            type: REMOVE_FAV,
            payload: id,
         });
   } catch (error) {
      console.error(error);
   }
       
    };
};

export const getFav = (userId)=>{
  const endpoint = `/rickandmorty/fav?userId=${userId}`;
  return async (dispatch) => {
   try {
  const { data } = await axios.get(endpoint);
  return dispatch({
    type: GET_FAV,
    payload: data,
  })
} catch (error) {
console.error(error.message);
}
     
  };
}

export const filterCards = (gender) =>{
    return{type: FILTER, payload: gender}
};

export const orderCards = (order) =>{
    return{type: ORDER, payload: order}
};

export const loginUser = (userId) => ({
  type: LOGIN_USER,
  payload: userId,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});


//REGISTER

// Acción para el registro del usuario
export const registerUser = (userData) => async (dispatch) => {
  try {
    // Realiza la llamada al endpoint de registro en el servidor
    const response = await axios.post('/rickandmorty/register', userData);
    const newUser = response.data;

    // Llama a la acción de éxito de registro
    dispatch(registerSuccess(newUser));
  } catch (error) {
    // Llama a la acción de fallo de registro
    dispatch(registerFailure(error.message));
  }
};

// Acción de éxito de registro
const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

// Acción de fallo de registro
const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});
 