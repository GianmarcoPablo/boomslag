

export class FavoriteJobDto {
    constructor(
        public readonly id: string,
        public readonly jobId: string,
        public readonly userId: string
    ) { }

    static create(props: { [key: string]: any }): [string?, FavoriteJobDto?] {
        const { id, jobId, userId } = props
        if (!jobId) return ['jobId is required']
        if (!userId) return ['userId is required']
        return [undefined, new FavoriteJobDto(id, jobId, userId)]
    }
}