"use server"
import { JobsResponse } from "@/interfaces/job.interface"
export const getAllJobs = async (): Promise<JobsResponse> => {
    const response = await fetch('http://localhost:4001/api/v1/jobs')
    const data = await response.json()
    return data
}