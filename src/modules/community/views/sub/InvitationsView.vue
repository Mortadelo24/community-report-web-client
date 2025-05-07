<script setup lang="ts">
import { useCommunityStore } from '../../stores';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import Button from '@/modules/element/components/Button.vue';
import Container from '@/modules/element/components/Container.vue';

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
    <Container class=" w-full p-6 container-b max-w-xl">
        <Button color="blue" @click="createInvitation">Create</Button>
        <div class="flow-root">
            <div class="divide-y divide-gray-200 dark:divide-gray-700">

                <div v-for="invitation in invitations" :key="invitation.id"  class="py-3 sm:py-4 flex items-center">
                    <div class="flex-1 min-w-0 ms-3">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {{ invitation.id }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </Container>
</template>
