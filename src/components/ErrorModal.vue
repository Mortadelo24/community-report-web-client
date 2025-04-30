<script setup lang="ts">
import Modal from '@/components/Modal.vue'
import { useNotificationStore } from '@/stores';
import { storeToRefs } from 'pinia';

const notificationStore = useNotificationStore();
const {isNotificationOpen, message} = storeToRefs(notificationStore);

</script>

<template>
    <Modal v-if="isNotificationOpen" :closable="true">
        <p class="font-bold">{{ message }}</p>
        <button type="button" @click="notificationStore.closeNotification" class="button-a">Ok</button>
    </Modal>

</template>