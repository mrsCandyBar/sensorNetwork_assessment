export class TeamModel {
    constructor(obj) {
        this.name = obj && obj.name ? obj.name : undefined;
        this.phoneNumber = obj && obj.phoneNumber ? obj.phoneNumber : undefined;
        this.email = obj && obj.email ? obj.email : undefined;
        this.password = obj && obj.password ? obj.password : undefined;
    }
}