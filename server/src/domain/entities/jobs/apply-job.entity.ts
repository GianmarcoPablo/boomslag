
enum Status {
    pending = 'pending',
    approved = 'approved',
    rejected = 'rejected'
}

export class ApplyJobEntity {
    constructor(
        public readonly id: string,
        public readonly jobid: string,
        public readonly userId: string,
        public readonly date: Date,
        public readonly status: Status
    ) { }

    static fromObject(props: { [key: string]: any }): ApplyJobEntity {
        const { id, jobid, userId, date, status } = props;

        if (!id) throw new Error('id is required');
        if (!jobid) throw new Error('job is required');
        if (!userId) throw new Error('user is required');
        if (!date) throw new Error('date is required');
        if (!status) throw new Error('status is required');
        if (date && !(date instanceof Date)) throw new Error('date must be a Date');

        return new ApplyJobEntity(
            id,
            jobid,
            userId,
            date,
            status
        );
    }
}