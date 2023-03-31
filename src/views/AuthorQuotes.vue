<template>
  <div class="quote-list">
    <p class="author-name">{{ store.author }}</p>
    <div v-if="dataLoading" class="spinner"></div>
    <div v-else v-for="quote in quoteData.data" class="quotes">
      <OneQuoteView :text="quote.quoteText" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { myStore } from "@/stores/data";
import OneQuoteView from "@/components/OneQuoteView.vue";

import type { DataStore } from "@/stores/data";

const store = myStore();

const quoteData = ref<DataStore>({} as DataStore);
const dataLoading = ref(true);

onMounted(async () => {
  const response = await fetch(
    `https://quote-garden.onrender.com/api/v3/quotes?author=${store.author}`
  );
  const jsonData = await response.json();
  quoteData.value = jsonData;
  dataLoading.value = false;
});
</script>

<style scoped>
.quote-list {
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: -200px;
  align-items: center;
}

.author-name {
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;

  color: var(--vt-c-text-light-2);

  margin-bottom: 140px;
}

.quotes {
  display: flex;
  justify-content: start;
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
