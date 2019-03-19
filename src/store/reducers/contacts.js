import * as actionTypes from '../actions/actionTypes';

const initialState = {
    contacts: [],
    loading: true,
    error: false
};

const fetchContactSuccess = (state, {contacts}) => {
    return {
        ...state,
        loading: false,
        error: false,
        contacts: state.contacts.concat(contacts)
    };
};

const fetchContactFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: true
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_CONTACTS_SUCCESS: return fetchContactSuccess(state, action);
        case actionTypes.FETCH_CONTACTS_FAIL: return fetchContactFail(state, action);
        default: return state;
    };
};

export default reducer;