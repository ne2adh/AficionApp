import axios from 'axios';
import {
    SET_SESSION
} from './types';
import { API_LOGIN } from '../../config/const';
export const logIn = ({ email, password }) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.post(API_LOGIN,{
                email:email,
                password:password
            })
            .then((respJson) => {
                //si todo sale bien guardamos el user y token en localstore
                console.log(respJson);
                dispatch({
                    type: SET_SESSION,
                    user: respJson.data.user,
                    token: respJson.data.token
                })
                return resolve(respJson.data)
            })
            .catch( (err) => {
                console.log(err);
                if(err.response && err.response.data)
                    return reject(err.response.data)
                else
                    return reject({ error : true, message : "Ocurrio un error por favor intenta más tarde."});
            });
    });
}