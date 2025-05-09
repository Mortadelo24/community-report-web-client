import {Report} from '../entities/report'
import { backend } from '../config'
import { parseReport} from '../utils'


const get = async(id: string): Promise<Report|null>=>{
    try{
        const data = (await backend.get(`/reports/${id}`)).data
        return parseReport(data)
    }catch(__){}
    return null
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

const addEvidenceImage = async(report_id: string, file: File) =>{
  const formData = new FormData()
  formData.append('file', file)

  try{
    await backend.post(`/reports/${report_id}/evidence`, formData)
    return 
  } catch(__){}
  throw new Error("could not add the image")
}

export{
    get,
    create,
    addEvidenceImage
}
