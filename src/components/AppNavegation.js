import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import { connect } from 'react-redux';

const Stack = createStackNavigator();

class AppNavegation extends Component {

    constructor(props) {
		super(props);
		this.state = { isLoading: true }
	}
	performTimeConsumingTask = async() => {
		return new Promise((resolve) =>
		  setTimeout(
			() => { resolve('result') },
			2000
		  )
		);
	  }
	
	  async componentDidMount() {
		// Preload data from an external API
		// Preload data using AsyncStorage
		const data = await this.performTimeConsumingTask();
	
		if (data !== null) {
		  this.setState({ isLoading: false });
		}
	  }
    render() {
        // get Authentication Check and Authentication state from AppReducer.js
		if (this.state.isLoading) {
			return <SplashScreen />;
		}		  
		const { auth_checked } = this.props.appState;		  
		console.log(auth_checked);
		return (    
			<Stack.Navigator headerMode="none">
				{ auth_checked ?  		
				<Stack.Screen name="MainScreen" component={MainScreen} />
				:
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				}
			</Stack.Navigator>
		);
			
	}
}

AppNavegation.propTypes ={
	auth_checked: PropTypes.bool
};

const mapStateToProps = (state) => ({
	appState: state.appState,
    auth_checked: state.auth_checked
});

export default connect(mapStateToProps, null)(AppNavegation);