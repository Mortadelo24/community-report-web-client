<script setup lang="ts">
import {useLanguageStore, useUserStore} from '../stores'
import { storeToRefs } from 'pinia';
import CommunityListItem from './CommunityListItem.vue';
import { onBeforeMount } from 'vue';

const userStore = useUserStore()

const { getPhrase } = useLanguageStore();
const { communitiesJoined } = storeToRefs(userStore);

onBeforeMount(async()=>{
    await userStore.loadCommunitiesJoined();
})


</script>
<template>
    <div  class="max-w-md w-full">
        <div class="flex flex-row justify-between">
            <p class="text-xl font-medium">{{ getPhrase('communityListTitle') }}</p>
            <router-link :to="{name: 'communityCreate'}" class="button-a">Create</router-link>
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