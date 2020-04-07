import qs from 'qs';
import {
    LOGIN,
    AUTH_CHECKED
} from './types';
import { API_LOGIN } from '../../config/const';
import AsyncStorage from "@react-native-community/async-storage";

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
                AsyncStorage.setItem('token', responseJson.success.token)
                    .then(() => dispatch({ type: LOGIN }))
                    .catch(error => console.debug(error))
                    
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
        AsyncStorage.getItem('token')
            .then(authStateResult => {
                authStateResult != null ? dispatch({ type: LOGIN }) : null;                
            })
            .catch(error => console.debug(error))
            .finally(() => dispatch(authChecked()));
    }
}