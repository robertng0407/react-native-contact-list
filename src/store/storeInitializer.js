import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import contactsReducer from './reducers/contacts';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    user: userReducer
});

const initializeStore = () => createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default initializeStore;