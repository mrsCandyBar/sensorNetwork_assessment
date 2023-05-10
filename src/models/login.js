export class LoginModel {
    constructor(obj) {
        this.email = obj && obj.email ? obj.email : undefined;
        this.password = obj && obj.password ? obj.password : undefined;
    }
}