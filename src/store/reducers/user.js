import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: {},
    loading: true,
    error: false
};

const fetchUserSuccess = (state, {user}) => {
    return {
        ...state,
        loading: false,
        error: false,
        user
    };
};

const fetchUserFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: true
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_USER_SUCCESS: return fetchUserSuccess(state, action);
        case actionTypes.FETCH_USER_FAIL: return fetchUserFail(state, action);
        default: return state;
    };
};

export default reducer;