<script setup lang="ts">
import { useLanguageStore } from '@/stores/language';
import { useGlobalStore } from '@/stores/global';
import { storeToRefs } from 'pinia';
import CommunityListItem from './CommunityListItem.vue';
import Button from '@/components/Button.vue';
import { onBeforeMount } from 'vue';
import { router } from '@/router';
const globalStore = useGlobalStore()

const { getPhrase } = useLanguageStore();
const { communitiesJoined } = storeToRefs(globalStore);
const {loadCurrentUserCommunitiesJoined} = globalStore;

onBeforeMount(async()=>{
    await loadCurrentUserCommunitiesJoined();
})


</script>
<template>
    <div>
        <div class="flex flex-row justify-between">
            <p class="text-xl font-medium">{{ getPhrase('communityListTitle') }}</p>
            <Button @click="router.push({name: 'communityCreate'})">Create</Button>
        </div>

        <div class="flex flex-col gap-2 bg-orange-100 mt-2 p-4 rounded-lg">
            <CommunityListItem v-for="community in communitiesJoined" :community="community" ref="community.id">
            </CommunityListItem>
        </div>

    </div>

</template>