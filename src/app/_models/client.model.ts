export class Client {
    public id: string;
    public name: string;
    public email: string;
    public role: string;

    constructor(id: string, name: string, email: string, role: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}