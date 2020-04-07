import qs from 'qs';
import {
    SET_SESSION,
    AUTH_CHECKED
} from './types';
import { API_LOGIN } from '../../config/const';

export const authChecked = () => ({ type: AUTH_CHECKED });

export const logIn = ({ email, password }) => (dispatch, getState) => {
    return fetch(API_LOGIN, {
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
            if (responseJson.success) {                
                dispatch({
                    type: SET_SESSION,
                    token: responseJson.success.token
                })
                return Promise.resolve(responseJson.success)
            } else {
                return Promise.reject(responseJson);
            }
        })
        .catch((err) => {
            if (err && err.error)
                return Promise.reject({ error: true, message: err.error });
            else
                return Promise.reject({ error: true, message: "Ocurrio un error por favor intenta más tarde." });
        });
}

export const checkLogin = () =>{
    return function(dispatch) {
        //let response = await fetch("https://randomuser.me/api/?results=15");
        dispatch(authChecked())
    }
}