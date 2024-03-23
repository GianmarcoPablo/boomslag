export interface Job {
    id: string;
    jobTitle: string;
    jobDescription: string;
    jobModality: string;
    createdAt: string; // Siempre como string por la representación en JSON
    updatedAt: string; // Siempre como string por la representación en JSON
    areaId: string;
    companyId: string;
    company: {
        nameCompany: string;
    },
    jobTags: string[];
    jobMinSalary: number | null;
    jobMaxSalary: number | null;
    jobWorkLoad: string | null;
    jobLevel: string | null;
    jobLocation: string | null;
    jobVacancies: number;
}

export interface JobsResponse {
    jobs: Job[];
    nextPage: string;
    prevPage: string;
}