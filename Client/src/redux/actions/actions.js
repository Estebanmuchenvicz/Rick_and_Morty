import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, LOGOUT_USER, GET_FAV, LOGIN_USER, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actions-type";
import axios from 'axios';
import Swal from 'sweetalert2';


const getUserId = () => {
  return localStorage.getItem('userId');
};

export const addFav = (character) =>{
  const endpoint = '/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const userId = getUserId();
      if (!userId) {
        Swal.fire({
          icon: 'error',
          title: 'Usuario no autenticado',
        });
        return;
      }
      const { data } = await axios.post(endpoint, { ...character, userId });

      // Mostrar mensaje de éxito si el servidor envía un mensaje de éxito en la respuesta
      if (data.message) {
        Swal.fire({
          icon: 'success',
          text: data.message,
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
        });
      }

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      // Mostrar mensaje de error si el servidor envía un mensaje de error en la respuesta
      if (error.response && error.response.data && error.response.data.message) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al agregar a favoritos',
        });
      }
    }
  };
     
};

export const removeFav = (id) =>{
  const endpoint = `/rickandmorty/fav/${id}?`;
  return async (dispatch) => {
    try {
      const userId = getUserId();
      if (!userId) {
        Swal.fire({
          icon: 'error',
          title: 'Usuario no autenticado',
        });
        return;
      }

      const response = await axios.delete(endpoint + `userId=${ userId }`);
      if (response.data.message) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: response.data.message,
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
        });
      }
      return dispatch({
        type: REMOVE_FAV,
        payload: id,
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al eliminar el favorito',
        });
      }
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
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al obtener favoritos',
      });
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
    const response = await axios.post('/rickandmorty/register', userData);
    const newUser = response.data;

    // Si la respuesta contiene el atributo "message", mostramos una notificación de éxito
    if (response.data.message) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: response.data.message,
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
      });
    }

    dispatch(registerSuccess(newUser));
  } catch (error) {
    // Si la respuesta contiene el atributo "message", mostramos una notificación de error
    if (error.response && error.response.data && error.response.data.message) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.message,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error en el registro',
      });
    }

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
 