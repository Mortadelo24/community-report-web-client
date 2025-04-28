
import { backend } from "../config"
import type { Community } from "../entities/community"
import { Invitation } from "../entities/invitation"
import { parseCommunity, parseInvitation } from "../utils"


const create = async(community_id: string): Promise<Invitation> => {
    try{
        const data = (await backend.post('invitations',{
            community_id
        })).data

        return parseInvitation(data)
    }catch(__){}

    throw new Error('Could not create the invitation')
}

const get = async(id: string): Promise<Invitation | null> => {
    try{
        const data = (await backend.get(`invitations/${id}`)).data
        return parseInvitation(data)
    }catch(__){}

    return null
}

const join = async(id: string): Promise<Community> => {
    try{
        const data = (await backend.post('invitations/join',{
            id
        })).data

        return parseCommunity(data)
    }catch(__){}

    throw new Error('Invalid code')
}

export{
    get,
    create,
    join
}