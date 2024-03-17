export class JobUpdateDto {
    constructor(
        public readonly jobTitle: string,
        public readonly jobDescription: string,
        public readonly jobModality: string,
        public readonly jobTags?: string[],
        public readonly jobMinSalary?: number,
        public readonly jobMaxSalary?: number,
        public readonly jobWorkLoad?: string,
        public readonly jobLevel?: string,
        public readonly jobLocation?: string,
        public readonly jobVacancies?: number,
    ) { }

    static create(props: { [key: string]: any }): [string?, JobUpdateDto?] {
        const { jobTitle, jobDescription, jobModality, jobTags, jobMinSalary, jobMaxSalary, jobWorkLoad, jobLevel, jobLocation, jobVacancies } = props;

        if (!jobTitle) return ['jobTitle is required', undefined];
        if (!jobDescription) return ['jobDescription is required', undefined];
        if (!jobModality) return ['jobModality is required', undefined];

        return [undefined, new JobUpdateDto(jobTitle, jobDescription, jobModality, jobTags, jobMinSalary, jobMaxSalary, jobWorkLoad, jobLevel, jobLocation, jobVacancies)];
    }
}