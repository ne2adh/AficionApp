import React from 'react';

import { DrawerActions } from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createDrawerNavigator
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    TouchableOpacity
} from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import CustomDrawerContent from './CustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {     
    return (
        <Drawer.Navigator initialRouteName="MainScreen" drawerContent={ (props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="MainScreen" component={MainScreen} />
        </Drawer.Navigator>
    );
}


const HeaderRight = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row', paddingRight: 15 }}>
            <TouchableOpacity
                onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()); }}>
                <Icon name="bars" size={30} color="#47546E" />
            </TouchableOpacity>
        </View>
    );
}

const AppStack = (isLoggedIn) => {
    return (
        <Stack.Navigator>
            {isLoggedIn ?
                (
                    <Stack.Screen name="MainScreen" component={DrawerRoutes} options={({ navigation }) => ({
                        headerRight: () => <HeaderRight navigation={navigation} />,
                    })} />
                ) : (
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                )}
        </Stack.Navigator>
    );
}


export default createRootNavigation = (isLoggedIn) => AppStack(isLoggedIn);