import * as actionTypes from './actionTypes';
import { fetchContacts } from '../../utils/api';

export const fetchContactsSuccess = (contacts) => {
    return {
        type: actionTypes.FETCH_CONTACTS_SUCCESS,
        contacts
    }
}

export const fetchContactsFail = () => {
    return {
        type: actionTypes.FETCH_CONTACTS_FAIL
    }
}

export const fetchContactsStart = () => {
    return async dispatch => {
        try {
            const contacts = await fetchContacts();
            dispatch(fetchContactsSuccess(contacts));
        } catch (e) {
            dispatch(fetchContactsFail());
        }
    }
}