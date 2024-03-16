
export class UpdateCompanyDto {
    constructor(
        public readonly nameCompany: string,
        public readonly descriptionCompany?: string,
        public readonly emailCompany?: string,
        public readonly websiteCompany?: string,
        public readonly addressCompany?: string,
    ) { }

    static create(props: { [key: string]: any }): [string?, UpdateCompanyDto?] {
        const { nameCompany, descriptionCompany, emailCompany, websiteCompany, addressCompany } = props;

        if (!nameCompany) return ['nameCompany is required', undefined];

        return [undefined, new UpdateCompanyDto(nameCompany, descriptionCompany, emailCompany, websiteCompany, addressCompany)];
    }
}