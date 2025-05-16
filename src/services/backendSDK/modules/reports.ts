import { Report } from '../entities/report'
import { backend } from '../config'
import { parseReport } from '../utils'
import { Pagination } from '../entities/pagination'

const get = async (id: string): Promise<Report | null> => {
  try {
    const data = (await backend.get(`/reports/${id}`)).data
    return parseReport(data)
  } catch (__) { }
  return null
}

const getReports = async (community_id: string, pagination: Pagination = new Pagination()): Promise<Report[]> => {
  try {
    const params = {
      community_id,
      ...pagination
    }
    const data = (await backend.get('/reports/', {
      params
    })).data
    return data.map(parseReport);
  } catch (__) { }

  return []
}

const create = async (community_id: string, complaint_id: string): Promise<Report> => {
  try {
    const data = (await backend.post('/reports/', {
      complaint_id,
      community_id
    })).data
    return parseReport(data)
  } catch (__) { }
  throw new Error("Could not create the report")
}

const addEvidenceImage = async (report_id: string, file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    await backend.post(`images/evidence`, formData, {
      params: {
        report_id
      },
    })
    return
  } catch (__) { }
  throw new Error("could not add the image")
}

export {
  get,
  create,
  addEvidenceImage,
  getReports
}
