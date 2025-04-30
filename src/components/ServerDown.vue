<script setup lang="ts">
import { useBackendStore } from '@/stores'
import Modal from './modalAlerts/Modal.vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const backendStore = useBackendStore();
const { isServerUp } = storeToRefs(backendStore);

const requiresServer = computed(()=>{
    return !!route.meta['requiresServer'];
})
</script>

<template>
    <Modal v-if="requiresServer && !isServerUp" :closable="false">
        <div class="relative flex flex-col items-center p-6 gap-4 bg-white rounded-lg shadow-sm dark:bg-gray-700">

            <p class="font-bold">The server is down</p>
            <p class="font-medium">Please try later</p>
            <button type="button" @click="backendStore.checkIfServerIsUp" class="button-a">Reload</button>
        </div>

    </Modal>

</template>