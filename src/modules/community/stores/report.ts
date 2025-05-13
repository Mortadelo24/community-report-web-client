import { defineStore, storeToRefs } from "pinia";
import { Image, backendSDK, Report } from "@/services";
import { ref } from "vue";
import { useCommunityStore } from "./community";

const useReportStore = defineStore("report", () => {
  const communityStore = useCommunityStore();
  const { community } = storeToRefs(communityStore);

  const evidences = ref<Image[]>([]);
  const report = ref<Report | null>(null);
  const reports = ref<Report[]>([]);


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

  const loadReports = async () => {
    if (!community.value) return
    reports.value = await community.value.getReports();
  }

  const unloadReports = ()=>{
    reports.value = []
  }

  const create = async (complaint: string) => {
    if (!community.value) throw new Error("there is no community");
    return await backendSDK.reports.create(community.value.id, complaint)
  }

  return {
    report,
    reports,
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
