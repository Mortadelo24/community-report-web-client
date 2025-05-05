import {Report} from '../entities/report'
import { backend } from '../config'
import { parseReport, parseReportDatachar } from '../utils'


const get = async(id: string): Promise<Report|null>=>{
    try{
        const data = (await backend.get(`/reports/${id}`)).data
        return parseReport(data)
    }catch(__){}
    return null
}

const getDatachars = async(community_id: string) =>{
  try{
    const data = (await backend.get('/reports/datachars',{
      params: {
        community_id 
      }
    })).data
    return data.map(parseReportDatachar)
  }catch(__){}
  return []
}

const create = async(community_id: string, complaint_id: string): Promise<Report> => {
    try{
        const data = (await backend.post('/reports', {
            complaint_id,
            community_id
        })).data
        return parseReport(data)
    } catch(__){}
    throw new Error("Could not create the report")
}

export{
    get,
    create,
    getDatachars
}
