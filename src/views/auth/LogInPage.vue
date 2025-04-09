<script setup lang="ts">
  import { storeToRefs } from 'pinia';
import {useAuthStore} from '../../stores/auth'
  const authStore = useAuthStore(); 
  const {logIn, logOut} = authStore;
  const {isAuthenticated} = storeToRefs(authStore);

</script>
<template>
  <div>
    <button v-if="!isAuthenticated" @click="logIn">Log in</button>
    <button v-else @click="logOut">Log out</button>
  </div>
</template>
