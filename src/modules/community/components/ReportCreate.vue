<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import { useComplaintStore, useReportStore, useStatisticStore } from '../stores';
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '@/stores';
import Button from '@/modules/element/components/Button.vue';
import Container from '@/modules/element/components/Container.vue';
import Input from '@/modules/element/components/Input.vue';


const complaintStore = useComplaintStore();
const reportStore = useReportStore();
const statisticStore = useStatisticStore();
const notificationStore = useNotificationStore();

const { complaints } = storeToRefs(complaintStore);
const complaintId = ref('');
const evidenceInputFile = useTemplateRef('evidenceInputFile');
const evidenceImageURL = ref<string | null>(null);

const getImageFile = () => {
  const ImageFileError = new Error('could not get the image file')

  if (!evidenceInputFile.value) throw ImageFileError
  const files = evidenceInputFile.value.getFiles()
  if (!files || files.length != 1) throw ImageFileError
  return files[0]
}
const createReport = async () => {
  if (complaintId.value.length < 1) return

  try {
    const report = await reportStore.create(complaintId.value);

    if (evidenceImageURL.value) {
      await report.addEvidenceImage(getImageFile());
    }
  } catch (err) {
    notificationStore.showError("Cannot create the complaint")
    return 
  } finally {
    evidenceInputFile.value?.clearFiles()
    evidenceImageURL.value = null;
    complaintId.value = '';
  }

  await reportStore.loadReports();
  await statisticStore.loadStatisticCommunityReports();

}
const changeImage = () => {
  const imageFile = getImageFile();
  const reader = new FileReader()
  reader.onload = () => {
    if (typeof reader.result !== 'string') return;
    evidenceImageURL.value = reader.result;
  }
  reader.readAsDataURL(imageFile);
}

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
