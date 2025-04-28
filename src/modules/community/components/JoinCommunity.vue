<script setup lang="ts">
import { ref } from 'vue';
import { useCommunityStore } from '../stores/community';
import { router } from '@/router';
import { useGlobalStore } from '@/stores/global';

const communityStore = useCommunityStore();
const globalStore = useGlobalStore();

const invitationId = ref("");




const joinCommunity = async () => {
    try {
        const community = await communityStore.join(invitationId.value);
        router.push({ name: 'community', params: { id: community.id } })
    } catch (__) {
        globalStore.errorMessage = "Invalid Invitation code";
    }

    invitationId.value = "";
}

</script>

<template>
    <div class="max-w-md container-b text-center">
        <p class="text-a">Join a community</p>
        <form @submit.prevent="joinCommunity" class="flex flex-col justify-center items-center h-full gap-2">
            <div class="text-left w-full">
                <p class="font-semibold">Invitation CODE</p>
                <input v-model="invitationId" placeholder="eg. 3fa85f64-5717-4562-b3fc-2c963f66afa6"
                    class="input-a w-full mt-2" type="text">
            </div>
            <button class="button-a" type="submit">Join</button>
        </form>
    </div>
</template>