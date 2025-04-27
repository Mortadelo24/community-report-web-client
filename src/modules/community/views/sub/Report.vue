<script setup lang="ts">
import { useCommunityStore } from '../../stores/community';
import { storeToRefs } from 'pinia';
import { backendSDK } from '@/apis/backendSDK';
import {complaints} from '@/assets/commonComplains.json'
import {ref} from 'vue'


const communityStore = useCommunityStore();
const {community} = storeToRefs(communityStore);
const complaint = ref<string>(complaints[0]);


const createReport = async()=>{
  if (!community.value) return
  await backendSDK.reports.create(community.value.id, complaint.value);
  console.log(await community.value.getReports());
}
</script>

<template>
<div class="container-b flex flex-row gap-2 flex-wrap max-w-xl">
  
      <select v-model="complaint" class="select-a overflow-hidden w-full">
        <option v-for="complaint in complaints" :value="complaint" class="text-wrap">
          {{complaint}}
        </option>
      </select>
      <button @click="createReport" type="button" class="button-a">Enviar</button> 
    </div>
</template>