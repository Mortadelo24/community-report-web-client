<script setup lang="ts">
import { useLanguageStore} from '@/stores'
import { useUserStore } from '@/modules/user/stores';
import { storeToRefs } from 'pinia';
import CommunityListItem from './CommunityListItem.vue';
import { onBeforeMount, ref } from 'vue';
import Button from '@/modules/element/components/Button.vue';

const userStore = useUserStore()

const isLoading = ref(true);


const { getPhrase } = useLanguageStore();
const { communitiesJoined } = storeToRefs(userStore);

onBeforeMount(async () => {
    await userStore.loadCommunitiesJoined();
    isLoading.value = false;
})


</script>
<template>
    <div class="max-w-md w-full">
        <div class="flex flex-row justify-between">
            <p class="text-xl font-medium">{{ getPhrase('communityListTitle') }}</p>
            <router-link :to="{ name: 'communityCreate' }" >
                <Button color="cyan">create</Button>
            </router-link>
        </div>

        <div class=" mt-2 p-4 min-h-80 container-b ">
            <div class="flex flex-col gap-4">
                <CommunityListItem v-for="community in communitiesJoined" :community="community" :key="community.id"
                    ref="community.id">
                </CommunityListItem>

            </div>

            <div class=" hidden h-full w-full text-center bold text-xl">
                No communities

            </div>

        </div>

    </div>

</template>