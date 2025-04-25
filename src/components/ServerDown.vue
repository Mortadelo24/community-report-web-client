<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import Modal from '@/components/Modal.vue'
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();
const { checkIfServerIsUp } = globalStore;
const {isServerUp} = storeToRefs(globalStore);
</script>

<template>
    <Modal v-if="!isServerUp" :closable="false">
        <p class="font-bold">The server is down</p>
        <p class="font-medium">Please try later</p>
        <button type="button" @click="checkIfServerIsUp" class="button-a">Reload</button>
    </Modal>

</template>