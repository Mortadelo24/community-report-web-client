<script setup lang="ts">
import Button from '@/modules/element/components/Button.vue';
import { RouterLink } from 'vue-router';
</script>
<template>
  <div>
    <p class="text-big-a m-4">Welcome to project <span class="text-epic-color-a">one</span> from integrador <span
        class="text-epic-color-a">I</span></p>
    <div class="flex flex-row items-center justify-center gap-4 mt-6">
      <RouterLink :to="{ name: 'app' }">
        <Button size="lg" color="green">Go to app</Button>
      </RouterLink>
      <RouterLink :to="{ name: 'form' }">


        <Button size="lg" color="cyan">Go to Form</Button>
      </RouterLink>
    </div>
  </div>
</template>
