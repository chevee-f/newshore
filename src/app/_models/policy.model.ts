export class Policy {
    public id: string;
    public amountInsured: string;
    public email: string;
    public inceptionDate: string;
    public installmentPayment: boolean;
    public clientId: string;

    constructor(id: string, amountInsured: string, email: string, inceptionDate: string, installmentPayment: boolean, clientId: string) {
        this.id = id;
        this.amountInsured = amountInsured;
        this.email = email;
        this.inceptionDate = inceptionDate;
        this.installmentPayment = installmentPayment;
        this.clientId = clientId;
    }
}