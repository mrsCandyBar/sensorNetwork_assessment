export class UserRepositoryModel {
    constructor(obj) {
        this.name = obj && obj.name ? obj.name : undefined;
        this.html_url = obj && obj.html_url ? obj.html_url : undefined;
        this.description = obj && obj.description ? obj.description : undefined;
        this.created_at = obj && obj.created_at ? obj.created_at : undefined;
        this.updated_at = obj && obj.updated_at ? obj.updated_at : undefined;
        this.pushed_at = obj && obj.pushed_at ? obj.pushed_at : undefined;
        this.clone_url = obj && obj.clone_url ? obj.clone_url : undefined;
        this.forks_count = obj && obj.forks_count ? obj.forks_count : undefined;
        this.open_issues_count = obj && obj.open_issues_count ? obj.open_issues_count : undefined;
        this.watchers = obj && obj.watchers ? obj.watchers : undefined;
        this.visibility = obj && obj.visibility ? obj.visibility : undefined;
    }
}