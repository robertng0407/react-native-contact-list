import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/contacts';

const initializeStore = () => createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default initializeStore;