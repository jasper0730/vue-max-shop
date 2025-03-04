<script setup lang="ts">
import { onMounted, computed } from "vue";
import AdminNavBar from "@/components/AdminNavBar.vue";
import Loading from 'vue-loading-overlay';
import { useAuthStore } from "@/stores/auth";

const store = useAuthStore();
const isLoading = computed(() => store.isLoading);
const status = computed(() => store.status);

onMounted(() => {
  store.checkAuth();
})

</script>
<template>
  <AdminNavBar></AdminNavBar>
  <div class="container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <router-view v-if="status"></router-view>
  </div>
</template>
