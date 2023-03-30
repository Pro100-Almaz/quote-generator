<template>
  <div class="quote-box">
    <p class="quote-text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: String;
}>();
</script>

<style scoped>
.quote-box {
  margin-left: -150px;
  padding-left: 6rem;

  border-left: 8px solid #f7df94;

  max-width: 721px;

  margin-bottom: 6rem;
}

.quote-text {
  font-size: 36px;
  line-height: 120%;
  color: var(--vt-c-black);
}
</style>
