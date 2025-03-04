<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart';
import Collapse from 'bootstrap/js/dist/collapse';

const store = useCartStore();
const cartLength = computed(() => store.cartData.carts?.length);
const collapse = ref<HTMLElement | null>(null);
let bsCollapse: Collapse | null = null;

const toggleNavHam = () => {
  bsCollapse?.toggle();
};
const closeNavHam = () => {
  bsCollapse?.hide();
};

onMounted(() => {
  store.getCarts();
  if (collapse.value) {
    bsCollapse = new Collapse(collapse.value, {
      toggle: false,
    });
  }
});
</script>
<template>
  <transition name="slide-down" appear>
    <div class="sticky-top bg-light">
      <nav class="container navbar navbar-expand-lg navbar-light px-2">
        <router-link class="logo navbar-brand fs-1" to="/" @click="closeNavHam">Max</router-link>
        <button class="navbar-toggler" type="button" @click="toggleNavHam">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
          ref="collapse"
        >
          <div class="navbar-nav align-items-center">
            <router-link class="nav-item nav-link me-3 h5" to="/about" @click="closeNavHam"
              >品牌</router-link
            >
            <router-link class="nav-item nav-link me-3 h5" to="/products" @click="closeNavHam"
              >香氛蠟燭</router-link
            >
            <router-link class="nav-item nav-link me-3 h5" to="/questions" @click="closeNavHam"
              >常見問題</router-link
            >
            <router-link class="nav-item nav-link me-3 d-lg-none h5" to="/cart" @click="closeNavHam"
              >購物車</router-link
            >
            <router-link
              class="nav-item nav-link position-relative d-none d-lg-block h5"
              @click="closeNavHam"
              to="/cart"
              ><i class="bi bi-bag fs-5"></i>
              <span
                class="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger"
              >
                {{ cartLength }}
              </span></router-link
            >
          </div>
        </div>
      </nav>
    </div>
  </transition>
</template>
