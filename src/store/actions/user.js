import * as actionTypes from './actionTypes';
import { fetchUserContact } from '../../utils/api';

export const fetchUserSuccess = (user) => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        user
    }
}

export const fetchuserFail = () => {
    return {
        type: actionTypes.FETCH_USER_FAIL
    }
}

export const fetchUserStart = () => {
    return async dispatch => {
        try {
            const user = await fetchUserContact();
            dispatch(fetchUserSuccess(user));
        } catch (e) {
            dispatch(fetchUserFail());
        }
    }
}