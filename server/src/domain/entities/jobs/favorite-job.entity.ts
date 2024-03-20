export class FavoriteJobEntity {
    constructor(
        public readonly id: string,
        public readonly jobId: string,
        public readonly userId: string,
    ) { }

    static fromObject(props: { [key: string]: any }): FavoriteJobEntity {
        const { id, jobId, userId } = props;

        if (!id) throw new Error('id is required');
        if (!jobId) throw new Error('jobId is required');
        if (!userId) throw new Error('userId is required');

        return new FavoriteJobEntity(
            id,
            jobId,
            userId
        );
    }
}