<script setup lang="ts">
import { useLanguageStore } from '@/stores/language';
import { useGlobalStore } from '@/stores/global';
import { storeToRefs } from 'pinia';
import CommunityListItem from './CommunityListItem.vue';
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
import InputText from '@/components/InputText.vue';
import { onBeforeMount, ref } from 'vue';
import {router} from '@/router'
const globalStore = useGlobalStore()

const { getPhrase } = useLanguageStore();
const { communitiesJoined } = storeToRefs(globalStore);
const {createCommunity, loadCurrentUserCommunitiesJoined} = globalStore;

onBeforeMount(async()=>{
    await loadCurrentUserCommunitiesJoined();
})

// modal logic
const isModalCreate = ref(false);
const newCommunityName = ref("");
const onModalClose = () => {
    isModalCreate.value = false;
}
const openModalCreate = () => {
    isModalCreate.value = true;
}
const closeModalCreate = ()=>{
    isModalCreate.value = false;
}

const createNewCommunity = async()=>{  
    const newCommunity = {
        name: newCommunityName.value
    }
    newCommunityName.value = "";

    const community = await createCommunity(newCommunity);
    if (!community) {
        console.error("could not create the community")
        return
    }
    closeModalCreate();
    router.push({name: 'community', params: {id: community.id}})
}
</script>
<template>
    <div>
        <div class="flex flex-row justify-between">
            <p class="text-xl font-medium">{{ getPhrase('communityListTitle') }}</p>
            <Button @click="openModalCreate">Create</Button>
        </div>

        <div class="flex flex-col gap-2 bg-orange-100 mt-2 p-4 rounded-lg">
            <CommunityListItem v-for="community in communitiesJoined" :community="community" ref="community.id">
            </CommunityListItem>
        </div>

        <Modal v-if="isModalCreate" :closable="true" :onClose="onModalClose">
            <div class="flex flex-col gap-4 p-2">

                <p class="font-bold text-xl">Create a Community</p>
                <div class="flex flex-col">
                    <p class="font-semibold">Name</p>
                    <InputText v-model="newCommunityName" class="w-full mt-1" placeholder="Comunidad martinez"></InputText>
                </div>
                <div class="w-full flex flex-row gap-2 justify-between">
                    <Button @click="closeModalCreate" class="w-1/2">Cancel</Button>
                    <Button @click="createNewCommunity" class="w-1/2">Create</Button>

                </div>
            </div>

        </Modal>
    </div>

</template>