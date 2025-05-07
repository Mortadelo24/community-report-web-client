<script setup lang="ts">
</script>
<template>
    <div>
        <RouterLink :to="{name: 'buttons'}">Buttons</RouterLink> 
        <RouterLink :to="{name: 'inputs'}">Inputs</RouterLink>
    </div>
        <RouterView>
        </RouterView>
</template>
