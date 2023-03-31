<script setup lang="ts">
import { RouterView } from "vue-router";

import OneQuoteView from "../components/OneQuoteView.vue";
import AuthorButton from "../components/AuthorButton.vue";
</script>

<template>
  <section class="body-quote-section">
    <OneQuoteView :text="'Almaz'" />
    <AuthorButton :author="'Almaz'" :type="'business'" />
  </section>
</template>

<style setup>
.body-quote-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
</style>
