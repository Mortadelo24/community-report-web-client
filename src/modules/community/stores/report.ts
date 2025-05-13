import { defineStore } from "pinia";
import { Image, backendSDK } from "@/services";
import { ref } from "vue";

const useReportStore = defineStore("report", ()=>{
  const evidences = ref<Image[]>([]); 
  

  const loadEvidences = async(reportId: string)=>{
    evidences.value = await backendSDK.images.getEvidences(reportId) 
  }

  return {
    evidences,
    loadEvidences
  }
})


export {
  useReportStore
}
