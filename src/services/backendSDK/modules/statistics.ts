import { parseStatisticReport } from "../utils"
import { backend } from "../config"
import type { StatisticReport } from "@/services"

const getStatisticCommunityReports = async(community_id: string): Promise<StatisticReport[]>=>{
  try{
    const data = (await backend.get('/statistics/community/reports', {
      params:{
         community_id 
      }
    })).data
    return data.map(parseStatisticReport)
  }catch(__){}
  return []
}

export {
  getStatisticCommunityReports
}
