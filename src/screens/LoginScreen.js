import React, { Component } from 'react';
import {
    View,
    Image,
	StatusBar,
	KeyboardAvoidingView
} from 'react-native';
import TextInput from '../components/TextInput';
import ButtonInput from '../components/ButtonInput';
import {loginStyles, containers } from '../config/styles';
import  colors  from '../config/colors';
import images from '../config/images';

export default class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            hidePassword: true,
          }
        this.iniciarSesion = this.iniciarSesion.bind(this);// you should bind this to the method that call the props
    }
    

      setHidePassword = arg => {
        this.setState({ hidePassword:arg })
      }
    
      handleEmailChange = email => {
        this.setState({ email })
      }
    
      handlePasswordChange = password => {
        this.setState({ password })
      }
      iniciarSesion(){          
        
        this.props.navigation.navigate('MainScreen');
        
      }
    render(){
        const { hidePassword, email, password } = this.state;
        
        return(
            <KeyboardAvoidingView behavior="height" style={containers.container_1}>
            <View style={loginStyles.container}>
				<StatusBar translucent backgroundColor='rgba(0,0,0,0.3)' />                    
                <Image source={images.splash} style={loginStyles.logo} />                    
                <TextInput 
                    name='email'
                    value={email}                        
                    placeholder='E-mail'
                    autoCapitalize='none'
                    onChangeText={this.handleEmailChange}
                    iconNameLeft='user'
                    iconColor= {colors.ypsDark} 
					keyboardType='email-address'
					returnKeyType='next'                    
                />
                <TextInput 
                    name='password'
                    value={password}                        
                    placeholder='Contrasena'
                    autoCapitalize='none'
                    onChangeText={this.handlePasswordChange}
                    iconNameLeft='lock'
                    iconNameRight='eye-slash'                        
                    iconColor= {colors.ypsDark} 
                    keyboardType={null}
                    bolGone={true}
                    secureTextEntry={hidePassword}
					onPress={ () => this.setHidePassword(!hidePassword) }
					returnKeyType='go' 
                />
                <ButtonInput 
                    title=' Iniciar Session' 
                    iconName='sign-in' 
                    iconColor= {colors.white} 
                    buttonColor={colors.ypsDark} 
                    onPress={this.iniciarSesion()}
                />
            </View>               
            </KeyboardAvoidingView>
        )
    }
}    
    