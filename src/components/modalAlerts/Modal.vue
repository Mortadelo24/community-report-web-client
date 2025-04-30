<script setup lang="ts">
const emit = defineEmits(['close'])
</script>
<template>
    <div @click="emit('close')" class="modal-overlay flex items-center justify-center">
        <div @click.stop class="modal-content">
                <slot></slot>
        </div>
        
    </div>
</template>