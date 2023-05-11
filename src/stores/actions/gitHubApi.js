import { getList } from './_commonEvents';
import { ResultsModel, UserResultModel, UserModel, UserRepositoryModel } from '../../models';
import { uri } from '../../utilities/endpoints';
import { 
    exampleUser, 
    exampleUserRepoData, 
    exampleUserResults 
} from './exampleData';

export const search = "@@team/SEARCH";
export const getUser = "@@team/GET_USER";
export const getUserRepos = "@@team/GET_USER_REPOS";

export const searchAction = (query) => {
    return async (dispatch) => {
        //let data = await getList(uri.search, {query}, ResultsModel);
        let data = new ResultsModel(exampleUserResults);
        if (data && data.items && data.items.length > 0) { 
            data.items = data.items.map((item) => { return new UserResultModel(item); });
        }
        return dispatch({ type: search, data });
    }
}

export const getUserAction = (username) => {
    return async (dispatch) => {
        //let data = await getList(uri.getUser, {username}, UserModel);
        let data = username ? new UserModel(exampleUser) : null;
        return dispatch({ type: getUser, data: data });
    }
}

export const getUserReposAction = (username) => {
    return async (dispatch) => {
        //let data = await getList(uri.getUserRepos, {username});
        let data = exampleUserRepoData
        if (data && data.length > 0) { 
            data = data.map((item) => { return new UserRepositoryModel(item); });
        }
        return dispatch({ type: getUserRepos, data });
    }
}