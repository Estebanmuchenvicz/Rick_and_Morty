import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, LOGOUT } from "./actions-type";
import axios from 'axios';

export const addFav = (character) =>{
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
         try {
				const { data } = await axios.post(endpoint, character);
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
    const endpoint = 'http://localhost:3001/rickandmorty/fav' + id;
    return async (dispatch) => {
		try {
         await axios.delete(endpoint);
         return dispatch({
            type: REMOVE_FAV,
            payload: id,
         });
   } catch (error) {
      console.error(error);
   }
       
    };
};

export const filterCards = (gender) =>{
    return{type: FILTER, payload: gender}
};

export const orderCards = (order) =>{
    return{type: ORDER, payload: order}
};

export function logout() {
   return {
     type: LOGOUT,
   };
 }
 