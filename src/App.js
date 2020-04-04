import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavegation from './components/AppNavegation';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import store from './redux/store';

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
