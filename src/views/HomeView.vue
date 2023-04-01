<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";

import OneQuoteView from "../components/OneQuoteView.vue";
import AuthorButton from "../components/AuthorButton.vue";

import type { DataStore } from "@/stores/data";
import { myStore } from "@/stores/data";

// const quoteData = ref<DataStore>({} as DataStore);
const store = myStore();

onMounted(store.getRandomQuote);
</script>

<template>
  <section class="body-quote-section">
    <div v-if="store.dataLoading">
      <OneQuoteView :text="store.quoteData.data[0].quoteText" />
      <AuthorButton
        :author="store.quoteData.data[0].quoteAuthor"
        :type="store.quoteData.data[0].quoteGenre"
      />
    </div>
    <div v-else class="spinner"></div>
  </section>
</template>

<style setup>
.body-quote-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
