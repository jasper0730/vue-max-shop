<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <main class>
    <Navbar />
    <RouterView />
    <Footer />
  </main>
</template>
<style scoped>
main {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
