<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted, ref } from "vue";

import OneQuoteView from "../components/OneQuoteView.vue";
import AuthorButton from "../components/AuthorButton.vue";

import type { DataStore } from "@/stores/data";
import { myStore } from "@/stores/data";

const quoteData = ref<DataStore>({} as DataStore);
const dataLoading = ref(false);
const store = myStore();

onMounted(async () => {
  const randomPage = Math.floor(Math.random() * 7267) + 1;
  const response = await fetch(
    `https://quote-garden.onrender.com/api/v3/quotes?page=${randomPage}`
  );
  const jsonData = await response.json();
  quoteData.value = jsonData;
  dataLoading.value = true;
  store.author = quoteData.value.data[0].quoteAuthor;
});

console.log(quoteData.value);
</script>

<template>
  <section class="body-quote-section">
    <div v-if="dataLoading">
      <OneQuoteView :text="quoteData.data[0].quoteText" />
      <AuthorButton
        :author="quoteData.data[0].quoteAuthor"
        :type="quoteData.data[0].quoteGenre"
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
