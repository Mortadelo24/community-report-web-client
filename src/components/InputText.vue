<script setup lang="ts">

defineProps<{
    modelValue: String
}>()
const emit = defineEmits([
    'update:modelValue'
])

const emitInputEvent = (event:Event)=>{
    if(!event.target) return 
    const htmlElement = event.target as HTMLInputElement;
    emit('update:modelValue', htmlElement.value); 
}

</script>
<template>
    <input :value="modelValue" @input="emitInputEvent($event)"  class="px-4 py-2 rounded-lg border-2 border-solid"
        type="text">

</template>