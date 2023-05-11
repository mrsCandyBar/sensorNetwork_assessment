import { assign } from 'lodash';
import {
    search, searchAction,
    getUser, getUserAction,
    getUserRepos, getUserReposAction,
} from '../../actions/gitHubApi';
import { 
    exampleUser, 
    exampleUserRepoData, 
    exampleUserResults 
} from './exampleData';

const initialState = {
    //users: null,
    selectedUser: null,
    selectedUserRepos: [],

    // Example Data for styling
    ///////////////////////////
    
    users: exampleUserResults,
    //selectedUser: exampleUser,
    //selectedUserRepos: exampleUserRepoData,
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