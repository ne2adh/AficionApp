import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavegation from './components/AppNavegation';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';
/* import reduxMulti from 'redux-multi'
import { batchedSubscribe } from 'redux-batched-subscribe' */
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);
//const store = createStore(reducer, applyMiddleware(thunk));

/* const createStoreWithMiddleware = applyMiddleware(
	thunk,
	reduxMulti,
  )(createStore)
  
  const createStoreWithBatching = batchedSubscribe(
	fn => fn()
  )(createStoreWithMiddleware)
    
  const store = createStoreWithBatching(reducer)
 */
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
