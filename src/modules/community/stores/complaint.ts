import { defineStore } from "pinia";
import { Complaint, backendSDK } from "@/services";
import { ref } from "vue";


const useComplaintStore = defineStore('complaint', ()=>{
  const complaints = ref<Complaint[]>([])

  const loadComplaints = async()=>{
    complaints.value = await backendSDK.complaints.getAll();
  }

  const getComplaint = async(id: string)=>{
    if (complaints.value.length < 1){
      await loadComplaints();
    }
  
    return complaints.value.find((complaint)=>complaint.id == id)
  }

  return{
    complaints,
    loadComplaints,
    getComplaint
  }
})

export {
  useComplaintStore
}
