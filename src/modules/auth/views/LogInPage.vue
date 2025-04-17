<script setup lang="ts">
  import { storeToRefs } from 'pinia';
import {useAuthStore} from '../../../stores/auth.ts'
import { router } from '../../../router/index.ts';
  const authStore = useAuthStore(); 
  const {logIn, logOut} = authStore;
  const {isAuthenticated} = storeToRefs(authStore);

  const signIn = async() => {
   await logIn();

   router.push({name: 'home'})
  }

</script>
<template>
  <div>
    <button v-if="!isAuthenticated" @click="signIn">Log in</button>
    <button v-else @click="logOut">Log out</button>
  </div>
</template>
