import AsyncStorage from '@react-native-community/async-storage';

const USER_KEY = '@usuario:key';

async function saveUser(user){
    try{
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
        return JSON.stringify(user);
    } catch(error){
        console.log('error al guardar ' + error.message);
        return 'Error de sintaxis';
    }
}

async function getUser(){
    try {
        const item = await AsyncStorage.getItem(USER_KEY);
        return JSON.parse(item);
    } catch (error) {
        console.log('error al recuperar ' + error.message);
        return null;
    }
}

export {saveUser, getUser}