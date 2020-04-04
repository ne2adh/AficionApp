import {createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default store;