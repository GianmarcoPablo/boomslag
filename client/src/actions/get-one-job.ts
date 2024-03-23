"use server"
import { Job } from "@/interfaces/job.interface"

export const getOneJob = async (id: string): Promise<Job | undefined> => {
    try {
        const response = await fetch(`http://localhost:4001/api/v1/jobs/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}