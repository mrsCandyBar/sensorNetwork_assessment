const root = "https://api.github.com/";
// Go to: https://api.github.com/
// For all possible query commands for github API

export const uri = {
    // Search, get users and get user repos
    search: root + 'search/users?q={query}&per_page={resultsPerPage}&page={pageCount}',
    getUser: root + 'users/{username}',
    getUserRepos: root + 'users/{username}/repos?per_page={resultsPerPage}&page={pageCount}'
}