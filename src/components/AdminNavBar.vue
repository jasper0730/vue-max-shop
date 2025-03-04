<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';
import Loading from 'vue-loading-overlay';

const isLoading = computed(() => store.isLoading);
const store = useAuthStore();
</script>
<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <transition name="slide-down" appear>
    <div class="sticky-top bg-light">
      <nav class="container navbar navbar-expand-lg navbar-light px-2">
        <router-link class="logo navbar-brand fs-1" to="/">Max</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end text-center"
          id="navbarNavAltMarkup"
          ref="collapse"
        >
          <div class="navbar-nav align-items-center">
            <router-link class="nav-item nav-link ms-3 h5" to="/admin/products">產品</router-link>
            <router-link class="nav-item nav-link ms-3 h5" to="/admin/orders">訂單</router-link>
            <router-link class="nav-item nav-link ms-3 h5" to="/admin/coupons">優惠券</router-link>
            <a class="nav-item nav-link ms-3 h5" href="#" @click.prevent="store.logOut">登出</a>
          </div>
        </div>
      </nav>
    </div>
  </transition>
</template>

<script setup lang="ts"></script>
