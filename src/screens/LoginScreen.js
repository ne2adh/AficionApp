import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
	Image,
	Alert,
	StatusBar,
	KeyboardAvoidingView
} from 'react-native';
import TextInput from '../components/TextInput';
import ButtonInput from '../components/ButtonInput';
import {loginStyles, containers } from '../config/styles';
import  colors  from '../config/colors';
import images from '../config/images';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions/loginInActions';

class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
			hidePassword: true,
			loader       : false
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
			console.log('iniciar seccion');
			this.setState({ loader : true });
			this.props.logIn(this.state).then(($result) => {
				//todo salio bien enviamos a otra vista donde veremos el perfild del usuario
				console.log('Sing IN');
			}).catch( (err) => {
				Alert.alert('Error',err.message);
			})     
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
                />
                <ButtonInput 
                    title={ (this.state.loader ? 'Cargando...' : 'Iniciar Sesión')} 
                    iconName='sign-in' 
                    iconColor= {colors.white} 
					buttonColor={colors.ypsDark} 					
                    onPress={ () => this.iniciarSesion()}
                />
            </View>               
            </KeyboardAvoidingView>
        )
    }
}    

LoginScreen.propTypes ={
    logIn: PropTypes.func.isRequired,
    user: PropTypes.bool.isRequired
};

function MapStateToProps(state){
    return {
        user : state.session && state.session.user ? state.session.user : false
    }
}
 
export default connect(MapStateToProps,{ logIn })(LoginScreen);