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
    container_1: {
        flex: 1,
    },
});

const loginStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 90,
        height: 90,
    }
});


const customDrawen = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        width:undefined, 
        padding: 16, 
        paddingTop: 18,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',        
        color: 'white',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});


export { containers, loginStyles, customDrawen };