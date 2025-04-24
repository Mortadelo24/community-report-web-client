<script setup lang="ts">
import InputText from '@/components/InputText.vue';
import Button from '@/components/Button.vue';


import { router } from '@/router'
import { ref } from 'vue'
import { useCommunityStore } from '../stores/community';
import { useGlobalStore } from '@/stores/global';


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
       useGlobalStore().setError("Could not create the community"); 
    }
}
</script>
<template>
    <div class="flex flex-col gap-4 p-2">
        <p class="font-bold text-xl">Create a Community</p>
        <div class="flex flex-col">
            <p class="font-semibold">Name</p>
            <InputText v-model="newCommunityName" class="w-full mt-1" placeholder="Comunidad martinez"></InputText>
        </div>
        <div class="w-full flex flex-row gap-2 justify-end">
            <Button @click="createNewCommunity" class="w-1/2">Create</Button>

        </div>
    </div>
</template>