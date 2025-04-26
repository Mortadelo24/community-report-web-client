<script setup lang="ts">
import { useLanguageStore } from '@/stores/language';
import { useGlobalStore } from '@/stores/global';
import { storeToRefs } from 'pinia';
import CommunityListItem from './CommunityListItem.vue';
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
    <div >
        <div class="flex flex-row justify-between">
            <p class="text-xl font-medium">{{ getPhrase('communityListTitle') }}</p>
            <button type="button" @click="router.push({name: 'communityCreate'})" class="button-a">Create</button>
        </div>

        <div class="flex flex-col gap-2 mt-2 p-4 min-h-80 container-b">
            <CommunityListItem v-if="communitiesJoined.length > 0" v-for="community in communitiesJoined" :community="community" ref="community.id">
            </CommunityListItem>
            <div v-else class="h-full w-full text-center bold text-xl">
                No communities

            </div>
            
        </div>

    </div>

</template>