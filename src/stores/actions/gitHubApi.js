import { getList } from './_commonEvents';
import { ResultsModel, UserResultModel, UserModel, UserRepositoryModel } from '../../models';
import { uri } from '../../utilities/endpoints';
import {
    mrsCandyBar, mrsCandyBar_repos, candice_results
} from './exampleData';

export const search = "@@team/SEARCH";
export const getUser = "@@team/GET_USER";
export const getUserRepos = "@@team/GET_USER_REPOS";
export const error = "@@team/HANDLE_ERROR";
export const clearError = "@@team/CLEAR_ERROR";

export const searchAction = (query, resultsPerPage, pageCount) => {
    return async (dispatch) => {

        let data = (query !== "demo") ?
            await getList(uri.search, { query, resultsPerPage, pageCount }, ResultsModel, dispatch) :
            new ResultsModel(candice_results)

        if (data && data.users && data.users.length > 0) {
            data.users = data.users.map((item) => { return new UserResultModel(item); });
        }
        return dispatch({ type: search, data });
    }
}

export const getUserAction = (username, demo) => {
    return async (dispatch) => {
        let data =
            demo ?
                (username ? new UserModel(mrsCandyBar) : null) :
                username ? await getList(uri.getUser, { username }, UserModel, dispatch) : null;
        return dispatch({ type: getUser, data: data });
    }
}

export const getUserReposAction = (username, resultsPerPage, pageCount, demo) => {
    return async (dispatch) => {
        let data = demo ? mrsCandyBar_repos : await getList(uri.getUserRepos, { username, resultsPerPage, pageCount }, undefined, dispatch);
        if (data && data.length > 0) {
            data = data.map((item) => { return new UserRepositoryModel(item); });
        }
        return dispatch({ type: getUserRepos, data });
    }
}

export const clearErrorAction = () => {
    return async (dispatch) => {
        return dispatch({
            type: error, data: null
        });
    }
}

export const handleError = (data, dispatch) => {
    return dispatch({
        type: error, data: {
            status: data.status,
            message: data.message,
            name: data.name,
            response: { data: data.response.data }
        }
    });
}