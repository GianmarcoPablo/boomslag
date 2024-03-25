"use server"

export const getFavoriteJobs = async (userId: string | undefined, cookieToken: string) => {
    try {
        const response = await fetch(`http://localhost:4001/api/v1/jobs/action/favorite/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookieToken}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}