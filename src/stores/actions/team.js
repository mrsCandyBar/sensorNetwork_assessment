import { getList, createListItem, updateListItem, deleteListItem } from './_commonEvents';
import { TeamModel } from '../../models/team';
import { uri } from '../../utilities/endpoints';

export const getAllTeamMembers = "@@team/GET";
export const updateTeamMember = "@@team/UPDATE";
export const createTeamMember = "@@team/CREATE";
export const deleteTeamMember = "@@team/DELETE";

export const getAllTeamMembersAction = () => {
    return async (dispatch) => {
        let data = await getList(uri.getAllTeamMembers, {});
        return dispatch({ type: getAllTeamMembers, data });
    }
}

export const createTeamMemberAction = (teamMember) => {
    return async (dispatch) => {
        let data = await createListItem(uri.createTeamMember, new TeamModel(teamMember));
        return dispatch({ type: createTeamMember, data });
    }
}

export const updateTeamMemberAction = (teamMember) => {
    return async (dispatch) => {
        const data = await updateListItem(uri.updateTeamMember, new TeamModel(teamMember));
        return dispatch({ type: updateTeamMember, data });
    }
}

export const deleteTeamMemberAction = (id) => {
    return async (dispatch) => {
        const entryId = await deleteListItem(uri.deleteTeamMember, { id });
        return dispatch({ type: deleteTeamMember, data: entryId });
    }
}