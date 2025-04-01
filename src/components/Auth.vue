<script setup lang="ts">
  import {useAuthStore} from '../stores/auth.ts'
  import {storeToRefs} from 'pinia'

  const authStore = useAuthStore();

  const {name} = storeToRefs(authStore);
</script>
<template>
  <div>
    <h1>This is a login</h1> 
    <p>
    this is a name: {{name}}
    </p>
  </div>
</template>
