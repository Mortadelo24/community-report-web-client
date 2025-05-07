<script setup lang="ts">
import { ref } from 'vue';
import { useCommunityStore } from '../stores/community';
import { router } from '@/router';
import { useNotificationStore } from '@/stores';
import Button from '@/modules/element/components/Button.vue';
import Input from '@/modules/element/components/Input.vue';


const communityStore = useCommunityStore();
const notificationStore = useNotificationStore();

const invitationId = ref("");




const joinCommunity = async () => {
    try {
        const community = await communityStore.join(invitationId.value);
        router.push({ name: 'community', params: { id: community.id } })
    } catch (__) {
        notificationStore.showError("You cannot use this invitaion code")
    }

    invitationId.value = "";
}

</script>

<template>
    <div class="max-w-md container-b text-center">
        <p class="text-a">Join a community</p>
        <form @submit.prevent="joinCommunity" class="flex flex-col justify-center items-center h-full gap-4">
            <div class="text-left w-full flex flex-col gap-2">
                <p class="font-semibold">Invitation CODE</p>
                <Input v-model="invitationId" placeholder="3fa85f64-5717-4562-b3fc-2c963f66afa6"></Input>
            </div>
            <Button type="submit">Join</Button>
            
        </form>
    </div>
</template>
