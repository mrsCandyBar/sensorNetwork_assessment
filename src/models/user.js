export class UserModel {
    constructor(obj) {
        this.login = obj && obj.login ? obj.login : undefined;
        this.avatar_url = obj && obj.avatar_url ? obj.avatar_url : undefined;
        this.url = obj && obj.url ? obj.url : undefined;
        this.repos_url = obj && obj.repos_url ? obj.repos_url : undefined;
        this.name = obj && obj.name ? obj.name : undefined;
        this.company = obj && obj.company ? obj.company : undefined;
        this.location = obj && obj.location ? obj.location : undefined;
        this.bio = obj && obj.bio ? obj.bio : undefined;
        this.twitter_username = obj && obj.twitter_username ? obj.twitter_username : undefined;
        this.public_repos = obj && obj.public_repos ? obj.public_repos : undefined;
        this.followers = obj && obj.followers ? obj.followers : undefined;
        this.following = obj && obj.following ? obj.following : undefined;
        this.created_at = obj && obj.created_at ? obj.created_at : undefined;
        this.updated_at = obj && obj.updated_at ? obj.updated_at : undefined;
    }
}