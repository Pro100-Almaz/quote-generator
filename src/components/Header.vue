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
</template>

<script setup lang="ts">
const randomQuote = () => {};
</script>

<style scoped>
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
</style>
