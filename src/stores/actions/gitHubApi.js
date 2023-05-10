import { getList, createListItem, updateListItem, deleteListItem } from './_commonEvents';
import { TeamModel } from '../../models/team';
import { uri } from '../../utilities/endpoints';

export const search = "@@team/SEARCH";
export const getUser = "@@team/GET_USER";
export const getUserRepos = "@@team/GET_USER_REPOS";


export const searchAction = (query) => {
    return async (dispatch) => {
        let data = await getList(uri.search, {query});
        return dispatch({ type: search, data });
    }
}

export const getUserAction = (username) => {
    return async (dispatch) => {
        let data = await getList(uri.getUser, {username});
        return dispatch({ type: search, data });
    }
}

export const getUserReposAction = (username) => {
    return async (dispatch) => {
        let data = await getList(uri.getUserRepos, {username});
        return dispatch({ type: search, data });
    }
}