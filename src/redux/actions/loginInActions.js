import qs from 'qs';
import {
    SET_SESSION
} from './types';
import { API_LOGIN } from '../../config/const';
export const logIn = ({ email, password }) => (dispatch, getState) => {
    return fetch(API_LOGIN,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: qs.stringify({
            email: 'peter@test.com',
            password: 'spinder',
        })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.success=='success'){
                dispatch({
                    type: SET_SESSION,
                    user: responseJson.success.user,                    
                    token: responseJson.success.token
                })
                return resolve(responseJson.success)
            } else{
                return responseJson.error;
            }
        })
        .catch((error) =>{
            if(err.response && err.response.error)
                    return reject(err.response.error)
                else
                    return reject({ error : true, message : "Ocurrio un error por favor intenta más tarde."});
      });
}