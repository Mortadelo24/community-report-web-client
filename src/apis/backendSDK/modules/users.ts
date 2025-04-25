import { backend } from "../config"
import { User } from "../entities/user"
import { Community } from "../entities/community"
import { parseCommunityList, parseUser } from "../utils"


const get = async (id: string): Promise<User | null> => {
    try {
        const data = (await backend.get(`/users/${id}`)).data
        return parseUser(data)
    } catch (__) { }
    return null
}

const getCurrent = async (): Promise<User | null> => { 
    try {
        const data = (await backend.get(`/users/me`)).data
        return parseUser(data)
    } catch (__) { }
    return null
}

const getCommunitiesJoined = async (id: string): Promise<Community[]> => {
    try {
        const data = (await backend.get(`/users/${id}/communities/joined`)).data
        return parseCommunityList(data);
    } catch (__) { }

    return []
}
const getCommunitiesOwned = async (id: string): Promise<Community[]> => {
    try {
        const data = (await backend.get(`/users/${id}/communities/owned`)).data
        return parseCommunityList(data);
    } catch (__) { }

    return []
}

export {
    get,
    getCurrent,
    getCommunitiesJoined,
    getCommunitiesOwned
}


