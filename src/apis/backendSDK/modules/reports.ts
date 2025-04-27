import {Report} from '../entities/report'
import { backend } from '../config'
import { parseReport } from '../utils'


const get = async(id: string): Promise<Report|null>=>{
    try{
        const data = (await backend.get(`/reports/${id}`)).data
        return parseReport(data)
    }catch(__){}
    return null
}

const create = async(community_id: string, complaint: string): Promise<Report> => {
    try{
        const data = (await backend.post('/reports', {
            complaint,
            community_id
        })).data
        return parseReport(data)
    } catch(__){}
    
    throw new Error("Could not create the report")
}

export{
    get,
    create
}