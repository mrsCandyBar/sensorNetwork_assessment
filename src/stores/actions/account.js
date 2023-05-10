import { post } from '../../utilities/repofactory';
import { uri } from '../../utilities/endpoints';

export const login = "@@account/LOGIN";
export const loginAction = (user) => {
    return async (dispatch) => {
        let data = await post(uri.login, user);
        return dispatch({ type: login, data });
    }
}