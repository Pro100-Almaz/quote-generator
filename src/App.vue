<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

import OneQuoteView from "./components/OneQuoteView.vue";
import AuthorButton from "./components/AuthorButton.vue";

const theme = ref("");

const randomQuote = () => {};
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="refresh-btn" @click="randomQuote">
        random <img src="sync_black_24dp.svg" />
      </div>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
  <section class="body-quote-section">
    <OneQuoteView :text="'Almaz'" />
    <AuthorButton :author="'Almaz'" :type="'business'" />
  </section>

  <RouterView />
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

header {
  margin-bottom: 227px;
}
.wrapper {
  display: flex;
  padding: 2rem 6rem;
  justify-content: flex-end;
}
.refresh-btn {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  line-height: 120%;
  color: var(--vt-c-text-secondary);

  gap: 0.5rem;

  cursor: pointer;
}

.body-quote-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
</style>
