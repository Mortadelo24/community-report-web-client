<script setup lang="ts">
import Button from '@/modules/element/components/Button.vue';
import Container from '@/modules/element/components/Container.vue';
import LanguageSelect from '@/components/LanguageSelect.vue';
import { RouterLink, useRouter } from 'vue-router';
import { useQRCode } from '@vueuse/integrations/useQRCode';
import { useLanguageStore } from '@/stores';


const {getPhrase} = useLanguageStore();

const router = useRouter();
const urlOrigin = window.origin;

const qrcodeForApp = useQRCode(urlOrigin + '/' + router.resolve({ name: 'app' }).href)
const qrcodeForForm = useQRCode(urlOrigin + '/' + router.resolve({ name: 'form' }).href)
</script>
<template>
  <div class="h-screen">
    <div class="m-6">
      <p class="text-title-3xl">{{getPhrase('rootHomeWelcome')}}</p>
      <div class="flex gap-2 items-center">
        <p>{{getPhrase('rootHomeSelectLanguageText')}}</p>
        <LanguageSelect></LanguageSelect>
      </div>


    </div>

    <div class=" h-full flex flex-row flex-wrap justify-center items-center gap-4 m-6`">
      <Container class="flex flex-col gap-4 p-6 justify-center items-center">
      <p class="text-title-lg">{{getPhrase('tryTheAppTitle')}}</p>
        <img :src="qrcodeForApp" alt="QR Code" class="w-64 rounded" />
        <div class="flex flex-row justify-between items-center gap-2">
          <RouterLink :to="{ name: 'app' }">
          <Button icon="home" size="lg" color="blue">{{getPhrase('goToAppButton')}}</Button>
          </RouterLink>
          <a :href="qrcodeForApp" download="appqr.png">
            <Button icon="download" size="lg" color="green"></Button>
          </a>
        </div>
      </Container>
      <Container class="flex flex-col gap-4 p-6 justify-center items-center">
      <p class="text-title-lg">{{getPhrase('fillTheFormTitle')}}</p>
        <img :src="qrcodeForForm" alt="QR Code" class="w-64 rounded" />
        <div class="flex flex-row justify-between items-center gap-2">
          <RouterLink :to="{ name: 'form' }">
          <Button icon="assignment" size="lg" color="cyan">{{getPhrase('goToFormButton')}}</Button>
          </RouterLink>


          <a :href="qrcodeForForm" download="formqr.png">
            <Button icon="download" size="lg" color="green"></Button>
          </a>


        </div>

      </Container>


    </div>
  </div>
</template>
