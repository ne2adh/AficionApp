import React, { Component } from 'react';
import {
    View, 
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Images from '../config/images';
import {containers} from '../config/styles';

export default class SplashScreen extends Component {
    
    componentDidMount(){
        setTimeout(() => {            
            this.props.navigation.navigate('LoginScreen');
        }, 5000, this);
    }
    render(){
        return(
            <View style={[containers.container, containers.backgroundcolor]}>
               <StatusBar translucent backgroundColor='rgba(0,0,0,0.3)' />
               <Animatable.Image 
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={ containers.animatedImage}
                    source={Images.splash}
               />
            </View>
        )
    }
}