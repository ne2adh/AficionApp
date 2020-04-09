import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {    
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView
} from '@react-navigation/drawer';

import {
    View,
    Text,
    Alert,
    ImageBackground
} from 'react-native';

import { Avatar } from 'react-native-elements';
import { customDrawen } from '../config/styles';
import images from '../config/images';
import Icon from 'react-native-vector-icons/FontAwesome';

import { logOut, loadData } from '../redux/actions/loginActions';

class CustomDrawerContent extends Component {    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
        } 
    }
    componentDidMount(){
        console.log(this.props.appState.loading)
        if (this.props.appState.loading) {
            this.props.loadData()            
        }
    }
    render() {        
        const { data } = this.props.appState
        return (
            <DrawerContentScrollView {...this.props} >
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
                            <Text style={customDrawen.title}>{data ? data.name :this.state.name}</Text>
                            <Text style={customDrawen.caption}>{data? data.email:this.state.email}</Text>
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
                        <DrawerItemList {...this.props} />
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
                                               this.props.logOut();
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
  }

const MapStateToProps = (state) => ({
	appState: state.appState
});

CustomDrawerContent.propTypes ={
    logOut: PropTypes.func,
    loadData: PropTypes.func.isRequired,
};

export default connect(MapStateToProps,{ logOut, loadData })(CustomDrawerContent);