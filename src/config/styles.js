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
    backgroundcolor:{
        backgroundColor: colors.white,
    },
    animatedImage:{
        width: 140,
        height: 140,
    },
});

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,         
        alignItems: 'center',
    },
    logo :{
        width: 90, 
        height: 90, 
        marginTop: 50
    }
});

          
export {containers, loginStyles};