import { defineStore } from "pinia";
import { StatisticReport } from '@/services'
import { ref } from "vue";
import { useCommunityStore } from "./community";


const useStatisticStore = defineStore('statistic', () => {
  const communityStore = useCommunityStore();

  const statisticCommunityReports = ref<StatisticReport[]>([])


  const loadStatisticCommunityReports = async () => {
    if (!communityStore.community) return;

    statisticCommunityReports.value = await communityStore.community.getStatisticReports();
  }

  return {
    statisticCommunityReports,
    loadStatisticCommunityReports
  }
})

export {
  useStatisticStore,
}
