import { StyleSheet } from 'react-native';
import colors from './colors';


const containers = StyleSheet.create({
    safeareaview: {
        flex: 1, 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    container_1:{
        flex: 1,        
    },
});

const loginStyles = StyleSheet.create({
    container: {
        flexGrow: 1,         
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo :{
        width: 90, 
        height: 90,       
    }
});

          
export {containers, loginStyles};