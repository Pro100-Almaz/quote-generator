<template>
  <div class="info-btn">
    <div class="quote-info">
      <p class="author-name">Almaz</p>
      <p class="quote-type" style="color: var(--vt-c-text-passive)">business</p>
    </div>
    <img src="trending_flat_white_24dp.svg" alt="array img" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.info-btn {
  padding: 50px 29px;
  display: block;
  justify-content: space-between;
  background-color: white;
  color: var(--vt-c-text-secondary);
  width: 672px;
  height: 151px;
  cursor: pointer;
}

.info-btn :hover,
.info-btn :active {
  background-color: var(--color-background-soft-dark);
  color: var(--vt-c-white);
}

.author-name {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}
</style>
