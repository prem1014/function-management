export class LoginModel  {
    public userId: string;
    public password: string;
    constructor(userId: string, password: string) {
        this.userId = userId;
        this.password = password;
    }
}