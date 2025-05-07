<script setup lang="ts">
import { useAuthStore } from '../stores';
import Alert from '@/components/alerts/Alert.vue';
import { useRouter } from 'vue-router';
import Button from '@/modules/element/components/Button.vue';
import Input from '@/modules/element/components/Input.vue';
import Container from '@/modules/element/components/Container.vue';
import { useNotificationStore } from '@/stores';

const authStore = useAuthStore();
const notificationStore = useNotificationStore();
const router = useRouter();
const signIn = async () => {

  try {

    await authStore.login();
    router.push({ name: 'home' })
  } catch (__) {
    notificationStore.showError("There is a problem with the auth module");
  }



}

</script>
<template>

  <Container class=" p-6 w-full max-w-md flex flex-col gap-6">

    <p class="text-xl font-medium text-gray-900 dark:text-white">Sign in</p>
    <Alert>Only copatible with google login</Alert>
    <label class="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
      Email
      <Input icon="mail" type="email" placeholder="email@example.com"></Input>
      
    </label>
    <label class="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
      Your password
      <Input icon="key" type="password"></Input>
    </label>
    <div class="flex flex-col gap-2">
      <Button color="blue">Login to your account</Button>
      <p class="text-center font-medium">Or</p>
      <Button color="cyan" @click="signIn" type="button">
        <div class="flex flex-row items-center justify-center">

          <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 18 19">
            <path fill-rule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clip-rule="evenodd" />
          </svg>
          Sign in with Google
        </div>
      </Button>
    </div>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <button class="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">Create
        account</button>
    </div>
  </Container>

</template>
