export class JobEntity {
    constructor(
        public readonly id: string,
        public readonly jobTitle: string,
        public readonly jobDescription: string,
        public readonly jobModality: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
        public readonly areaId: string,
        public readonly companyId: string,
        public readonly company?: { nameCompany: string },
        public readonly jobTags?: string[],
        public readonly jobMinSalary?: number | null,
        public readonly jobMaxSalary?: number | null,
        public readonly jobWorkLoad?: string | null,
        public readonly jobLevel?: string | null,
        public readonly jobLocation?: string | null,
        public readonly jobVacancies?: number
    ) { }

    public static fromObject(props: { [key: string]: any }): JobEntity {
        const {
            id,
            jobTitle,
            jobDescription,
            jobModality,
            createdAt,
            updatedAt,
            areaId,
            companyId,
            Company,
            jobTags,
            jobMinSalary,
            jobMaxSalary,
            jobWorkLoad,
            jobLevel,
            jobLocation,
            jobVacancies,
        } = props;

        if (!id) throw new Error('id is required');
        if (!jobTitle) throw new Error('jobTitle is required');
        if (!jobDescription) throw new Error('jobDescription is required');
        if (!jobModality) throw new Error('jobModality is required');
        if (!createdAt) throw new Error('createdAt is required');
        if (!updatedAt) throw new Error('updatedAt is required');
        if (createdAt && !(createdAt instanceof Date)) throw new Error('createdAt must be a Date');
        if (updatedAt && !(updatedAt instanceof Date)) throw new Error('updatedAt must be a Date');
        if (!areaId) throw new Error('areaId is required');
        if (!companyId) throw new Error('companyId is required');
        if (!companyId) throw new Error('companyId is required');

        return new JobEntity(
            id,
            jobTitle,
            jobDescription,
            jobModality,
            createdAt,
            updatedAt,
            areaId,
            companyId,
            Company, // Pasar el objeto Company completo
            jobTags,
            jobMinSalary || null,
            jobMaxSalary || null,
            jobWorkLoad || null,
            jobLevel || null,
            jobLocation || null,
            jobVacancies
        );
    }
}