import React, { Component } from 'react';
import {
    View, 
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Images from '../config/images';

export default class SplashScreen extends Component {
    goToScreen(routeName){
        this.props.navigation.navigate(routeName);
    }
    componentDidMount(){
        setTimeout(() => {
            this.goToScreen('LoginScreen')
        }, 5000, this);
    }
    render(){
        return(
            <View>
               <StatusBar translucent backgroundColor='rgba(0,0,0,0.3)' />
               <Animatable.Image 
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{
                        width: 200,
                        height: 200,
                        margin: 100,
                    }}
                    source={Images.splash}
               />
            </View>
        )
    }
}