export class ResultsModel {
    constructor(obj) {
        this.total_count = obj && obj.total_count ? obj.total_count : undefined;
        this.users = obj && obj.items ? obj.items : [];
    }
}

export class UserResultModel {
    constructor(obj) {
        this.login = obj && obj.login ? obj.login : undefined;
        this.avatar_url = obj && obj.avatar_url ? obj.avatar_url : undefined;
    }
}