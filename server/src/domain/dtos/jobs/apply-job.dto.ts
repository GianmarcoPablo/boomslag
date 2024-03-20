

export class ApplyJobDto {
    constructor(
        public readonly jobId: string,
        public readonly userId: string
    ) { }

    static create(props: { [key: string]: any }): [string?, ApplyJobDto?] {
        const { jobId, userId } = props
        if (!jobId) return ['jobId is required']
        if (!userId) return ['userId is required']
        return [undefined, new ApplyJobDto(jobId, userId)]
    }
}