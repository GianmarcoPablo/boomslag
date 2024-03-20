export class JobUpdateDto {
    constructor(
        public readonly jobTitle: string,
        public readonly jobDescription: string,
        public readonly jobModality: string,
        public readonly companyId?: string,
        public readonly areaId?: string,
        public readonly jobTags?: string[],
        public readonly jobMinSalary?: number,
        public readonly jobMaxSalary?: number,
        public readonly jobWorkLoad?: string,
        public readonly jobLevel?: string,
        public readonly jobLocation?: string,
        public readonly jobVacancies?: number,
    ) { }

    static create(props: { [key: string]: any }): [string?, JobUpdateDto?] {


        const { jobTitle, jobDescription, jobModality, companyId, areaId, jobTags, jobMinSalary, jobMaxSalary, jobWorkLoad, jobLevel, jobLocation, jobVacancies } = props

        if (!jobTitle) return ['jobTitle is required']
        if (!jobDescription) return ['jobDescription is required']
        if (!jobModality) return ['jobModality is required']
        if (!companyId) return ['companyId is required']
        if (!areaId) return ['areaId is required']

        return [undefined, new JobUpdateDto(
            jobTitle,
            jobDescription,
            jobModality,
            companyId,
            areaId,
            jobTags,
            jobMinSalary,
            jobMaxSalary,
            jobWorkLoad,
            jobLevel,
            jobLocation,
            jobVacancies
        )]
    }
}