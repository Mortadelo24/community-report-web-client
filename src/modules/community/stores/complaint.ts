import { defineStore } from "pinia";
import { Complaint, backendSDK } from "@/services";
import { ref } from "vue";


const useComplaintStore = defineStore('complaint', ()=>{
  const complaints = ref<Complaint[]>([])

  const loadComplaints = async()=>{
    complaints.value = await backendSDK.complaints.getAll();
  }

  const getComplaint = (id: string)=>{
    return complaints.value.find((complaint)=>complaint.id == id) || null
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
