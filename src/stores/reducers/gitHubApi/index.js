import { assign } from 'lodash';
import {
    search, searchAction,
    getUser, getUserAction,
    getUserRepos, getUserReposAction,
    error, clearErrorAction
} from '../../actions/gitHubApi';

const initialState = {
    users: null,
    selectedUser: null,
    selectedUserRepos: [],
    error: null
}

export const actionCreators = {
    search: searchAction,
    getUser: getUserAction,
    getUserRepos: getUserReposAction,
    clearError: clearErrorAction
}

export function reducer(state = initialState, action) {
    if (action.data || action.data === null) {
        switch (action.type) {
            case search:
                return assign({ ...state }, { users: action.data, selectedUser: null });

            case getUser:
                return assign({ ...state }, { selectedUser: action.data, selectedUserRepos: [] });

            case getUserRepos:
                return assign({ ...state }, { selectedUserRepos: action.data });

            case error:
                return assign({ ...state }, { error: action.data });

            default:
                return state;
        }
    } else {
        return state;
    }
}