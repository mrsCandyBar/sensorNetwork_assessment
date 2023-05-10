export class ResultsModel {
    constructor(obj) {
        this.total_count = obj && obj.total_count ? obj.total_count : undefined;
        this.items = obj && obj.items ? obj.items : [];
    }
}

export class UserResultModel {
    constructor(obj) {
        this.login = obj && obj.login ? obj.login : undefined;
        this.avatar_url = obj && obj.avatar_url ? obj.avatar_url : undefined;
        this.url = obj && obj.url ? obj.url : undefined;
        this.repos_url = obj && obj.repos_url ? obj.repos_url : undefined;
    }
}