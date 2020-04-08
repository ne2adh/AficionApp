import React from 'react';
import AsyncStorage from "@react-native-community/async-storage";
import { DrawerActions } from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import { customDrawen } from '../config/styles';
import images from '../config/images';

import {
    View,
    Text,
    Alert,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import { useDispatch } from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';

import {
    LOGOUT
} from '../redux/actions/types';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
    const dispatch = useDispatch();
    const {data} = props;
    return (
        <DrawerContentScrollView {...props}>
            <View style={customDrawen.drawerContent}>
                <View>
                    <ImageBackground
                        source={images.background_1}
                        style={customDrawen.userInfoSection}
                    >
                        <Avatar
                            size={50}
                            rounded
                            source={{
                                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                        />
                        <Text style={customDrawen.title}>Dawid Urbaniak</Text>
                        <Text style={customDrawen.caption}>@{data}</Text>
                        <View style={customDrawen.row}>
                            <View style={customDrawen.section}>
                                <Text style={[customDrawen.paragraph, customDrawen.caption]}>202</Text>
                                <Text style={customDrawen.caption}>Following</Text>
                            </View>
                            <View style={customDrawen.section}>
                                <Text style={[customDrawen.paragraph, customDrawen.caption]}>159</Text>
                                <Text style={customDrawen.caption}>Followers</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={customDrawen.drawerSection}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='ban'
                                type='font-awesome'
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='shopping-cart'
                                type='font-awesome'
                                color={color}
                                size={size}
                            />
                        )}
                        label="Preferences"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='folder'
                                type='font-awesome'
                                color={color}
                                size={size}
                            />
                        )}
                        label="Bookmarks"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='sign-out'
                                type='font-awesome'
                                color={color}
                                size={size}
                            />
                        )} 
                        label="Logout" 
                        onPress={() =>{
                            Alert.alert(
                                'Cerrar Session',
                                'Quiere cerrar session ?',
                                [
                                    { text: 'Cancelar', onPress: () => { return null } },
                                    {
                                        text: 'Confirmar', onPress: () => {
                                            AsyncStorage.removeItem('token')
                                                .then(() => dispatch({type:LOGOUT}))
                                        }
                                    },
                                ],
                                { cancelable: false }
                            )
                        }
                    } />
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

function DrawerRoutes() {     
    return (
        <Drawer.Navigator initialRouteName="MainScreen" drawerContent={ (props) => (<CustomDrawerContent {...props} data={'data'} />)}>
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