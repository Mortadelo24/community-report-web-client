<script setup lang="ts">


import { router } from '@/router'
import { ref } from 'vue'
import { useCommunityStore } from '../stores/community';
import { useNotificationStore } from '@/stores';


const notificationStore = useNotificationStore();
const communityStore = useCommunityStore();
const newCommunityName = ref("");

const createNewCommunity = async () => {
    const newCommunity = {
        name: newCommunityName.value
    }
    newCommunityName.value = "";

    try {
        const community = await communityStore.create(newCommunity);
        router.push({ name: 'community', params: { id: community.id } })
    } catch (__) {
        notificationStore.showError("Could not create the community");
    }
}
</script>
<template>
    <div class="flex flex-col items-center justify-center">

        <form @submit.prevent="createNewCommunity"  class="container-b flex flex-col gap-6 p-2 max-w-md">
            <p class="font-bold text-xl">Create a Community</p>
            <div class="flex flex-col">
                <p class="font-semibold">Name</p>
                <input type="text" v-model="newCommunityName" class="w-full mt-1 input-a"
                    placeholder="Comunidad martinez"></input>
            </div>
            <div class="w-full flex flex-row gap-2 justify-end">
                <button type="submit" class="w-1/2 button-a">Create</button>

            </div>
        </form>
    </div>
</template>