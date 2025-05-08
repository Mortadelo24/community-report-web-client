<script setup lang="ts">
import { useCommunityStore } from '../stores';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
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
</script>
<template>
  <Container class="p-6">
    <Button color="blue" @click="createInvitation">Create</Button>

    <div class="flex flex-col gap-2 mt-6">
      <InvitationListItem v-for="invitation in invitations" :ref="invitation.id" :invitation="invitation">
      </InvitationListItem>
    </div>


  </Container>
</template>
