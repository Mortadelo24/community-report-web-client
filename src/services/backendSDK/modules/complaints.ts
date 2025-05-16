import { backend } from "../config"
import { parseComplaint } from "../utils"

const get = async(id: string) =>{
  try{
    const data = (await backend.get(`/complaints/${id}`)).data
    return parseComplaint(data)
  }catch(__){}
  return null
}

const getAll = async()=>{
  try{
    const data = (await backend.get('/complaints/')).data
    return data.map(parseComplaint)
  }catch(__){}

  return []
}

export {
  get,
  getAll
}
