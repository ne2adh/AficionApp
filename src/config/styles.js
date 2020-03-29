import { StyleSheet } from 'react-native';
import fonts from './fonts';
import colors from './colors';


const styles = StyleSheet.create({
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
          
export default styles;