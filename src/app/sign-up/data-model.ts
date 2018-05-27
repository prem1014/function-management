export class SignUpModel {
    public name: string;
    public email: string;
    public mobile: number;
    public password: string;
    public role: string;

    constructor(name, email, mobile, password, role) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
        this.role = role;
    }
}
