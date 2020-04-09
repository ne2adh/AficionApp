import qs from 'qs';
import {
    LOGIN,
    LOGOUT,
    DATA_LOADED,
    LOAD_DATA,
    AUTH_CHECKED
} from './types';
import { API_LOGIN, API_DETAILS } from '../../config/const';
import AsyncStorage from "@react-native-community/async-storage";

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
                        .then(() => dispatch({type: LOAD_DATA}))
                        .catch(error => console.debug(error))
                        .finally(()=> dispatch({ type: LOGIN }));
                    /* .then(() => dispatch({ type: LOGIN }))
                    .catch(error => console.debug(error))
                     */

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
            .finally(() => dispatch({ type: AUTH_CHECKED }));
    }
}

export const loadData = () => {
    return function(dispatch){        
        AsyncStorage.getItem('token')
            .then(result => {
                if(result != null){
                    fetch(API_DETAILS, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${result}`
                        }
                    })                    
                    .then(res=>res.json())
                    .then(res =>  {
                        console.log(res)
                        const responseJSON = res.success;
                        dispatch({type: DATA_LOADED, payload: responseJSON})
                    })
                    .catch((err) => {
                        console.log(err)
                    });
                }
            })
            .catch(error => console.debug(error));
/* 
        fetch(API_DETAILS, {
            method: 'POST',
            headers: new Headers({
                Authorization: `Bearer ${token}`,
            }),
        })
        .then(res => { 
            console.log(res.json())
        })
        .then((responseJson) => {
            console.log(responseJson)
        })
        .catch((err) => {
            console.log(err)
        }); */
        //dispatch({type: DATA_LOADED, responseJSON})
        console.log('loadData')        
    }
}

export const logOut = () => {
    return function(dispatch){
        AsyncStorage.removeItem('token')
        .then(() => dispatch({type:LOGOUT}))
    }
}