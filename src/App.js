import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavegation from './components/AppNavegation';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import peopleReducer from './redux/reducers/peopleReducer';
const createStoreWithMeddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMeddleware(peopleReducer); 

const App = ()  => {
  return (
    <>
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<AppNavegation />
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
    </>
  );
};


export default App;
