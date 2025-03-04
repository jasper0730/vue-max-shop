<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
const store = useAuthStore();
onMounted(() => {
  store.checkAuth();
});
</script>

<template>
  <main>
    <Navbar />
    <router-view />
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
