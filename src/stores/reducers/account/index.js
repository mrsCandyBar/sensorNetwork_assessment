
import { assign } from 'lodash';
import { login, loginAction } from '../../actions/account';

const initialState = { 
    me: {}
 }

export const actionCreators = {
    login: loginAction
}

export function reducer(state = initialState, action) {
    if (action.data) {
        switch (action.type) {
            case login:
                return assign({ ...state }, { myAccount: action.data });

            default:
                return state;
        }
    } else {
        return state;
    }
}