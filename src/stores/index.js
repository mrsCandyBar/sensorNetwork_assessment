

import { combineReducers } from 'redux';
import { reducer as Account } from './reducers/account';
import { reducer as Teams } from './reducers/team';


const allReducers = {
    account: Account,
    teams: Teams    
}

export const rootReducer = combineReducers(allReducers);