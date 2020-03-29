import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavegation from './components/AppNavegation';
import { SafeAreaProvider} from 'react-native-safe-area-context';

const App = ()  => {
  return (
    <>
		<SafeAreaProvider>
			<NavigationContainer>
				<AppNavegation />
			</NavigationContainer>
		</SafeAreaProvider>
    </>
  );
};


export default App;
