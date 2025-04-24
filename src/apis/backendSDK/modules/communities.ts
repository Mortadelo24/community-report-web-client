import { Community, User, type CommunityCreate } from '@/apis/backendSDK/index.ts';
import { backend } from '../config';
import { parseCommunity, parseUserList } from '../utils';

const create = async (communityCreate: CommunityCreate): Promise<Community> => {
    try{
        const data = (await backend.post('/communities', communityCreate )).data;
        return parseCommunity(data)
    }catch(__){
        throw new Error("Could not create the community")
    }
}

const get = async (id: number): Promise<Community|null> => {
    try{
        const data = (await backend.get(`communities/${id}`)).data;
        return parseCommunity(data)
    }catch(__){}

    return null
}

const getMembers = async (id: number): Promise<User[]> => {
    try{
        const data = (await backend.get(`communities/${id}/members`)).data;
        return parseUserList(data)
    }catch(__){}

    return []
}

export {
    create,
    get,
    getMembers
}