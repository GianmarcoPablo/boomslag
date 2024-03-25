"use server"

// tokenUserBoomslag
export const addFavoriteJob = async (jobId: string, userId: string | undefined, cookieToken: string) => {


    try {
        const response = await fetch('http://localhost:4001/api/v1/jobs/action/favorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookieToken}`
            },
            body: JSON.stringify({ jobId, userId }),

        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}