<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

import HomeView from "./views/HomeView.vue";
import Header from "./components/Header.vue";

const theme = ref("");
</script>

<template>
  <Header />
  <router-view />
</template>

<style scoped>
body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;

  display: flex;
  flex-direction: column;
}
</style>
