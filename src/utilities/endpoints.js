const root = "http://localhost:8080/api/v1/";

export const uri = {
    // My Account
    login: root + 'login',
    logout: root + 'logout',
    
    // Team
    getAllTeamMembers: root + 'usersByOrganization',
    createTeamMember: root + 'user',
    updateTeamMember: root + 'user',
    deleteTeamMember: root + 'user/{id}',
}