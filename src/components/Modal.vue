<script setup lang="ts">
const {closable = true, onClose = ()=>{}} = defineProps<{
    closable?: boolean;
    onClose?: ()=>void;
}>()

const close = ()=>{
    if (!closable) return
    onClose();
}
</script>
<template>
    <div @click="close" class="modal">
        <div @click.stop class="modal-content text-center">
           <slot></slot> 
        </div>
    </div>
</template>
