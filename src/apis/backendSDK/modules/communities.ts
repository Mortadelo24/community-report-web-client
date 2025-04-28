import { Community, User, type CommunityCreate } from '@/apis/backendSDK/index.ts';
import { backend } from '../config';
import { parseCommunity, parseInvitation, parseReport, parseUser} from '../utils';
import type { Report } from '../entities/report';
import type {Invitation} from '../entities/invitation'

const create = async (communityCreate: CommunityCreate): Promise<Community> => {
    try{
        const data = (await backend.post('/communities', communityCreate )).data;
        return parseCommunity(data)
    }catch(__){
        throw new Error("Could not create the community")
    }
}

const get = async (id: string): Promise<Community|null> => {
    try{
        const data = (await backend.get(`communities/${id}`)).data;
        return parseCommunity(data)
    }catch(__){}

    return null
}

const getMembers = async (id: string): Promise<User[]> => {
    try{
        const data = (await backend.get(`communities/${id}/members`)).data;
        return data.map(parseUser)
    }catch(__){}

    return []
}

const getReports = async (id:string): Promise<Report[]> =>{
    try{
        const data = (await backend.get('reports', {
            params:{
                community_id: id
            }
        })).data
        return data.map(parseReport);
    }catch(__){}

    return []
}

const getInvitations = async (community_id: string): Promise<Invitation[]> => {
    try{
        const data = (await backend.get('invitations',{
            params: {
                community_id
            }
        })).data
        return data.map(parseInvitation);
    }catch(__){}

    return []
}

export {
    create,
    get,
    getMembers,
    getReports,
    getInvitations
}