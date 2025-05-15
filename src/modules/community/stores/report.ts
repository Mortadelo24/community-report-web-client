import { defineStore, storeToRefs } from "pinia";
import { Image, backendSDK, Report, Pagination } from "@/services";
import { ref } from "vue";
import { useCommunityStore } from "./community";


const useReportStore = defineStore("report", () => {
  const communityStore = useCommunityStore();
  const { community } = storeToRefs(communityStore);

  const evidences = ref<Image[]>([]);
  const report = ref<Report | null>(null);
  const reports = ref<Report[]>([]);
  const reportsPagination = ref<Pagination>(new Pagination());

  const loadEvidences = async (reportId: string) => {
    evidences.value = await backendSDK.images.getEvidences(reportId)
  }


  const unloadReport = () => {
    evidences.value = [];
  }

  const loadReport = async (reportId: string) => {
    await loadEvidences(reportId);
    report.value = await backendSDK.reports.get(reportId)

  }

  const loadReports = async (offset?: number, limit?: number) => {
    if (!community.value) return
    const pagination = new Pagination(offset, limit);
    reports.value = await backendSDK.reports.getReports(community.value.id, pagination) 
    reportsPagination.value = pagination; 
  }

  const unloadReports = () => {
    reports.value = []
  }

  const create = async (complaint: string) => {
    if (!community.value) throw new Error("there is no community");
    return await backendSDK.reports.create(community.value.id, complaint)
  }

  return {
    report,
    reports,
    reportsPagination,
    evidences,
    create,
    loadReport,
    loadReports,
    unloadReport,
    unloadReports,
    loadEvidences
  }
})


export {
  useReportStore
}
