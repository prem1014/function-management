export class LoginModel  {
    public id: string;
    public password: string;
    public isAuthReq: boolean;

    constructor(id: string, password: string, isAuthReq) {
        this.id = id;
        this.password = password;
        this.isAuthReq = isAuthReq;
    }
}
