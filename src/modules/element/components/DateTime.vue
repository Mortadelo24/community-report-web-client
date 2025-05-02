<script setup lang="ts">
const {date} = defineProps<{
    date: Date
}>()

</script>
<template>
<div>
   {{ date.toLocaleDateString() }} 
</div>
</template>