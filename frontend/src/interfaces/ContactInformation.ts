export interface IContactInformation {
    email: string;
    phone: string;
    address: string;
}

class ContactInformation implements IContactInformation{
    public email: string;
    public phone: string;
    public address: string;

    constructor();
    constructor(iContactInformation? : IContactInformation) {
        this.email = iContactInformation?.email || '';
        this.phone = iContactInformation?.phone || '';
        this.address = iContactInformation?.address || '';
    }
}

export default ContactInformation;