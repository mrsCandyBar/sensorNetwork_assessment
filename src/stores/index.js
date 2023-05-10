

import { combineReducers } from 'redux';
import { reducer as GitHubApi } from './reducers/gitHubApi';


const allReducers = {
    gitHub: GitHubApi,
}

export const rootReducer = combineReducers(allReducers);