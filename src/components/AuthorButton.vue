<template>
  <button type="button" class="info-btn" @click="quotesFromAuthor">
    <div class="quote-info">
      <p class="author-name">{{ author }}</p>
      <p class="quote-type" style="color: var(--vt-c-text-passive)">
        {{ type }}
      </p>
    </div>
    <img src="trending_flat_white_24dp.svg" alt="array img" />
  </button>
  <!-- <div class="info-btn">
    
  </div> -->
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  author: String;
  type: String;
}>();

const quotesFromAuthor = () => {
  router.push("/author");
};
</script>

<style scoped>
.info-btn {
  padding: 50px 29px;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: row;

  max-width: 672px;

  border: none;
  background-color: white;
  cursor: pointer;
}

.info-btn:hover {
  background-color: var(--color-background-soft-dark);
  color: var(--vt-c-white);
}

.info-btn:active {
  background-color: var(--color-background-mute-dark);
  color: var(--vt-c-white);
  border: none;
}

.quote-info {
  margin-right: 470px;
  display: flex;
  flex-direction: column;
  flex-wrap: initial;
}

.author-name {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}

.quote-type {
  font-size: 14px;
  line-height: 16px;
}
</style>
