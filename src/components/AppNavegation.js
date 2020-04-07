import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	createStackNavigator
} from '@react-navigation/stack';
import {
	createDrawerNavigator,
	DrawerItem,
	DrawerContentScrollView
} from '@react-navigation/drawer';

import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import { customDrawen } from '../config/styles';

import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import { connect } from 'react-redux';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<View style={customDrawen.drawerContent}>
				<View style={customDrawen.userInfoSection}>
					<Avatar
						size={50}
						rounded
						source={{
							uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
						}}
					/>
					<Text style={customDrawen.title}>Dawid Urbaniak</Text>
					<Text style={customDrawen.caption}>@trensik</Text>
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
				</View>
				<View style={customDrawen.drawerSection}>
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
				</View>
			</View>
		</DrawerContentScrollView>
	);
}

function DrawerRoutes() {
	return (
		<Drawer.Navigator initialRouteName="MainScreen" drawerContent={(props) => <CustomDrawerContent {...props} />}>
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

class AppNavegation extends Component {

	constructor(props) {
		super(props);
		this.state = { isLoading: true }
	}

	performTimeConsumingTask = async () => {
		return new Promise((resolve) =>
			setTimeout(
				() => { resolve('result') },
				5000
			)
		);
	}

	async componentDidMount() {
		const data = await this.performTimeConsumingTask();
		if (data !== null) {
			this.setState({ isLoading: false });
		}
	}
	render() {
		if (this.state.isLoading) {
			return <SplashScreen />;
		}
		const { auth_checked } = this.props.appState;
		return (
			<Stack.Navigator>
				{auth_checked ?
					<Stack.Screen name="MainScreen" component={DrawerRoutes} options={({ navigation }) => ({
						headerRight: () => <HeaderRight navigation={navigation} />,
					})} />
					:
					<Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
				}
			</Stack.Navigator>
		);

	}
}

AppNavegation.propTypes = {
	auth_checked: PropTypes.bool
};

const mapStateToProps = (state) => ({
	appState: state.appState,
	auth_checked: state.auth_checked
});

export default connect(mapStateToProps, null)(AppNavegation);