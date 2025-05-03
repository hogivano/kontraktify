<template>
  <NuxtWelcome />
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';

const response = await useFetch("/api/user");
console.log("response", response.data.value);
</script>