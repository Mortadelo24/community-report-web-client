<script setup lang="ts">

import Button from '../components/Button.vue';
import type { ButtonColor, Buttonsize } from '../types/button';

const colors: ButtonColor[] = ['green', 'cyan', 'blue', 'red'];
const disableds: boolean[] = [true, false];
const sizes: Buttonsize[] = ['sm', 'md', 'lg'];

</script>

<template>
  <div class="p-6 flex flex-col gap-6">
    <p class="text-big-a">Buttons</p>
    <div class="flex flex-row flex-wrap gap-2">
      <div v-for="color in colors" class="flex flex-row flex-wrap gap-2">

        <div v-for="disabled in disableds" class="flex flex-row gap-2 flex-wrap">
          <Button v-for="size in sizes" :size="size" :disabled="disabled" :color="color"></Button>
        </div>
      </div>
    </div>

  </div>

</template>