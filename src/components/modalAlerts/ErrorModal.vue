<script setup lang="ts">
import Button from '@/modules/element/components/Button.vue';
import Modal from './Modal.vue';
import { useNotificationStore } from '@/stores';
import { storeToRefs } from 'pinia';

const notificationStore = useNotificationStore();
const {isNotificationOpen, message} = storeToRefs(notificationStore);



</script>
<template>
    <Modal @close="notificationStore.closeNotification" v-if="isNotificationOpen">
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <button @click="notificationStore.closeNotification"
                class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close</span>
            </button>
            <div class="p-4 md:p-5 text-center flex flex-col items-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg> 
                <p class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{{ message }}</p>
                <Button @click="notificationStore.closeNotification" color="red" type="button">
                    Close
                </Button>
            </div>
        </div>
    </Modal>
</template>