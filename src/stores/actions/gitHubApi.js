import { getList } from './_commonEvents';
import { ResultsModel, UserResultModel, UserModel, UserRepositoryModel } from '../../models';
import { uri } from '../../utilities/endpoints';
import {
    astaxie, astaxie_repos,
    mrsCandyBar, mrsCandyBar_repos,
    test502git, test502git_repos,
    testdrivenio, testdrivenio_repos,
    test_results, candice_results
} from './exampleData';

export const search = "@@team/SEARCH";
export const getUser = "@@team/GET_USER";
export const getUserRepos = "@@team/GET_USER_REPOS";

export const searchAction = (query, resultsPerPage, pageCount) => {
    return async (dispatch) => {

        let data = (query !== "demo") ?
            await getList(uri.search, { query, resultsPerPage, pageCount }, ResultsModel) :
            new ResultsModel(candice_results)

        if (data && data.users && data.users.length > 0) {
            data.users = data.users.map((item) => { return new UserResultModel(item); });
        }
        console.log("data ? ", data)
        return dispatch({ type: search, data });
    }
}

export const getUserAction = (username, demo) => {
    return async (dispatch) => {
        let data =
            demo ?
                (username ? new UserModel(mrsCandyBar) : null) :
                username ? await getList(uri.getUser, { username }, UserModel) : null;
        console.log("data >>> check for failed requests", data)
        return dispatch({ type: getUser, data: data });
    }
}

export const getUserReposAction = (username, resultsPerPage, pageCount, demo) => {
    return async (dispatch) => {
        let data = demo ? mrsCandyBar_repos : await getList(uri.getUserRepos, { username, resultsPerPage, pageCount });
        if (data && data.length > 0) {
            data = data.map((item) => { return new UserRepositoryModel(item); });
        }

        console.log("data repos >>> check for failed requests", data)
        return dispatch({ type: getUserRepos, data });
    }
}