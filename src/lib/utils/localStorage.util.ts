export const setLStorage = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value)
        await localStorage.setItem(`@${key}`, jsonValue)
    } catch (e: any) {
        console.log('Error storing value to storage', e.message)
    }
}

export const getLStorage = (key: string) => {
    try {
        const jsonValue = localStorage.getItem(`@${key}`)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e: any) {
        console.log('Error retrieving value to storage', e.message)
    }
}

export const deleteLStorage = async (key: string) => {
    try {
        await localStorage.removeItem(`@${key}`)

        console.log('Done.')
        return true
    } catch (e: any) {
        console.log('Error deleting value to storage', e.message)
        return null
    }
}
