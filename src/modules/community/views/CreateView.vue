<script setup lang="ts">

import Button from '@/modules/element/components/Button.vue';
import Input from '@/modules/element/components/Input.vue';
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

        <form @submit.prevent="createNewCommunity"  class="container-b flex flex-col gap-4 p-2 max-w-md">
            <p class="font-bold text-xl">Create a Community</p>
            <div class="flex flex-col gap-2">
                <p class="font-semibold">Name</p>
                <Input v-model="newCommunityName" placeholder="Community name"></Input>
            </div>
            <div class="w-full flex flex-row gap-2 justify-end">
                <Button type="submit" color="cyan" >create</Button>
            </div>
        </form>
    </div>
</template>
