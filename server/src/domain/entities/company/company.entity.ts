
export class CompanyEntity {
    constructor(
        public readonly id: string,
        public readonly nameCompany: string,
        public readonly userId: string,
        public readonly descriptionCompany?: string,
        public readonly emailCompany?: string,
        public readonly websiteCompany?: string,
        public readonly addressCompany?: string,
    ) { }

    public static fromObject(props: { [key: string]: any }): CompanyEntity {
        const { id, nameCompany, userId, descriptionCompany, emailCompany, websiteCompany, addressCompany } = props;

        if (!id) throw new Error('id is required');
        if (!nameCompany) throw new Error('nameCompany is required');
        if (!userId) throw new Error('userId is required');


        return new CompanyEntity(id, nameCompany, userId, descriptionCompany, emailCompany, websiteCompany, addressCompany);
    }
}