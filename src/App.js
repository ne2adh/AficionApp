import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavegation from './components/AppNavegation';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './redux/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducer);

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
