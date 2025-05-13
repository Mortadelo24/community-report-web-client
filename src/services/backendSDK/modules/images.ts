import { backend } from "../config" 
import { Image } from "../entities/image"
import { parseImage } from "../utils"

const getEvidences = async(report_id: string): Promise<Image[]> =>{
  try{
    const data = (await backend.get(`/images/evidences`, {
      params: {
        report_id
      }
    })).data
    return data.map(parseImage)
  }catch(__){}
  return []
}

export {
  getEvidences
}
