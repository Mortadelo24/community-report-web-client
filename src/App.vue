<script setup lang="ts">


</script>
<template>
  <nav class="flex gap-2 text-gray-200 p-4">
    <RouterLink to="/" class="bg-red-600">Home</RouterLink>
    <RouterLink :to="{name: 'community', params: {id: '1'}}" class="bg-green-600">Community</RouterLink>
  </nav>
  <RouterView class="mx-2 my-4"></RouterView>
  
  

 
</template>

