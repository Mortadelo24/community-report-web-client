<script setup lang="ts">
import { useCommunityStore } from '../stores';
import { storeToRefs } from 'pinia';
import {  onBeforeMount, ref, watchEffect } from 'vue';
import Button from '@/modules/element/components/Button.vue';
import Container from '@/modules/element/components/Container.vue';
import InvitationListItem from './InvitationListItem.vue';

const communityStore = useCommunityStore();
const { invitations } = storeToRefs(communityStore)

const createInvitation = async () => {
  const community = communityStore.community
  if (!community) return
  await communityStore.createInvitation();
  await communityStore.loadInvitations();
}
onBeforeMount(async () => {
  await communityStore.loadInvitations();
})

const isListEmpty = ref(true)

watchEffect(()=>{
  isListEmpty.value = invitations.value.length < 1
})

</script>
<template>
  <Container class="flex flex-col gap-6 p-4">
    <div class="flex flex-row items-center justify-between">
      <p class="text-title-lg">Invitations</p>
      <Button icon="add" color="blue" @click="createInvitation">Create</Button>
    </div>
    <div v-if="!isListEmpty" class="flex flex-col gap-2 min-h-64">
      <InvitationListItem v-for="invitation in invitations" :ref="invitation.id" :invitation="invitation">
      </InvitationListItem>
    </div>
    <div v-else class=" min-h-64 flex justify-center items-center">
        No invitations
    </div>


  </Container>
</template>
