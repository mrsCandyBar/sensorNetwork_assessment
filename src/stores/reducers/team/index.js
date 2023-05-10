import { assign } from 'lodash';
import {
    getAllTeamMembers,
    updateTeamMember,
    createTeamMember,
    deleteTeamMember,
    getAllTeamMembersAction,
    updateTeamMemberAction,
    createTeamMemberAction,
    deleteTeamMemberAction,
} from '../../actions/team';

const initialState = {
    teamMembers: []
}
export const actionCreators = {
    getAllTeamMembers: getAllTeamMembersAction,
    updateTeamMember: updateTeamMemberAction,
    createTeamMember: createTeamMemberAction,
    deleteTeamMember: deleteTeamMemberAction
}

export function reducer(state = initialState, action) {
    if (action.data) {
        switch (action.type) {
            case getAllTeamMembers:
                return assign({ ...state }, { team: action.data });

            case createTeamMember:
                const updatedTeamList = {
                    ...state.teamMembers,
                    ...action.data
                }
                return assign({ ...state }, { team: updatedTeamList });

            case updateTeamMember:
                const updatedTeam = {
                    ...state.teamMembers,
                    [action.id]: action.data
                }
                return assign({ ...state }, { team: updatedTeam });

            case deleteTeamMember:
                const updatedTeamMemberList = { ...state.teamMembers }
                delete updatedTeamMemberList[action.id];
                return assign({ ...state }, { team: updatedTeamMemberList });

            default:
                return state;
        }
    } else {
        return state;
    }
}