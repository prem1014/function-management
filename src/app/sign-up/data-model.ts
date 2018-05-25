export class SignUpModel {
    public name: string;
    public email: string;
    public mobile: number;
    public password: string;

    constructor(name, email, mobile, password) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
    }
}
