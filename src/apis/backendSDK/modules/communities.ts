import { Community, type CommunityCreate } from '@/apis/backendSDK/index.ts';
import { backend } from '../config';
import { parseCommunity } from '../utils';

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

export {
    create,
    get
}