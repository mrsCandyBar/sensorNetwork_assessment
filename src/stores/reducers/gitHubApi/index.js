import { assign } from 'lodash';
import {
    search, searchAction,
    getUser, getUserAction,
    getUserRepos, getUserReposAction,
} from '../../actions/gitHubApi';

const initialState = {
    users: [],
    selectedUser: null,
    selectedUserRepos: [],
}
export const actionCreators = {
    search: searchAction,
    getUser: getUserAction,
    getUserRepos: getUserReposAction,
}

export function reducer(state = initialState, action) {
    if (action.data) {
        switch (action.type) {
            case search:
                return assign({ ...state }, { users: action.data });

            case getUser:
                return assign({ ...state }, { getUser: action.data });

            case getUserRepos:
                return assign({ ...state }, { getUserRepos: action.data });

            default:
                return state;
        }
    } else {
        return state;
    }
}