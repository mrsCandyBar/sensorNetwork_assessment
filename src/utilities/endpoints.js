const root = "https://api.github.com/";
// Go to: https://api.github.com/
// For all possible query commands for github API

export const uri = {
    // Search, get users and get user repos
    search: root + 'search/users?q={query}{&page,per_page,sort,order}',
    getUser: root + 'users/{username}',
    getUserRepos: root + 'users/{user}/repos{?type,page,per_page,sort}'
}