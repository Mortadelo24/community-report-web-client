<script setup lang="ts">
import { onBeforeMount, ref, useTemplateRef } from 'vue';
import { useCommunityStore, useComplaintStore, useStatisticStore } from '../stores';
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '@/stores';
import Button from '@/modules/element/components/Button.vue';
import Container from '@/modules/element/components/Container.vue';
import Input from '@/modules/element/components/Input.vue';


const communityStore = useCommunityStore();
const complaintStore = useComplaintStore();
const statisticStore = useStatisticStore();
const notificationStore = useNotificationStore();

const { complaints } = storeToRefs(complaintStore);
const complaintId = ref('');
const evidenceInputFile = useTemplateRef('evidenceInputFile');
const evidenceImageURL = ref<string | null>(null);

const createReport = async () => {
  if (complaintId.value.length < 1) return
  try {
    await communityStore.createReport(complaintId.value)
    complaintId.value = '';
    evidenceImageURL.value = null;
} catch (__) {
    notificationStore.showError("Cannot create the complaint")
  }

  await communityStore.loadReports();
  await statisticStore.loadStatisticCommunityReports();
}
const changeImage = () => {
  if (!evidenceInputFile.value) return

  const files = evidenceInputFile.value.getFiles()
  if (!files || files.length != 1) return

  const reader = new FileReader()
  reader.onload = () => {
    if (typeof reader.result !== 'string') return;
    evidenceImageURL.value = reader.result;
  }
  reader.readAsDataURL(files[0]);
}

onBeforeMount(async () => {
  await complaintStore.loadComplaints();
})
</script>

<template>
  <Container class="flex flex-row p-6 gap-2 flex-wrap max-w-md">

    <select v-model="complaintId" class="select-a overflow-hidden w-full">
      <option value="" disabled selected>
        Select a complaint
      </option>
      <option v-for="complaint in complaints" :value="complaint.id" class="text-wrap">
        {{ complaint.text }}
      </option>
    </select>

    <img v-if="evidenceImageURL" :src="evidenceImageURL">
    <div class="flex flex-row gap-4">
      <Input @change="changeImage" ref="evidenceInputFile" type="file" accept="image/*"> </Input>
      <Button @click="createReport" color="blue">Send</Button>
    </div>
  </Container>
</template>
