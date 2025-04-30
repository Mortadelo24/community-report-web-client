<script setup lang="ts">
import { useBackendStore } from '@/stores'
import Modal from '@/components/Modal.vue'
import { storeToRefs } from 'pinia';

const backendStore = useBackendStore();
const {isServerUp} = storeToRefs(backendStore);

</script>

<template>
    <Modal v-if="!isServerUp" :closable="false">
        <p class="font-bold">The server is down</p>
        <p class="font-medium">Please try later</p>
        <button type="button" @click="backendStore.checkIfServerIsUp" class="button-a">Reload</button>
    </Modal>

</template>