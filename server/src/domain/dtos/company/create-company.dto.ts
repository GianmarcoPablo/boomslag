export class CreateCompanyDto {
    constructor(
        public readonly nameCompany: string,
        public readonly userId: string,
        public readonly descriptionCompany?: string,
        public readonly emailCompany?: string,
        public readonly websiteCompany?: string,
        public readonly addressCompany?: string,
    ) { }


    static create(props: { [key: string]: any }): [string?, CreateCompanyDto?] {
        const { nameCompany, userId, descriptionCompany, emailCompany, websiteCompany, addressCompany } = props;

        if (!nameCompany) return ['nameCompany is required', undefined];
        if (!userId) return ['userId is required', undefined];

        return [undefined, new CreateCompanyDto(nameCompany, userId, descriptionCompany, emailCompany, websiteCompany, addressCompany)];
    }
}