<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '../stores/cart';
import Collapse from 'bootstrap/js/dist/collapse';

const store = useCartStore();
const cartLength = computed(() => store.cartData.carts?.length);
const collapse = ref(false);
let bsCollapse: Collapse | null = null;

const toggleNavHam = () => {
  bsCollapse.toggle();
};
const closeNavHam = () => {
  bsCollapse.hide();
};

onMounted(() => {
  store.getCarts();
  bsCollapse = new Collapse(collapse.value, {
    toggle: false,
  });
})

</script>
<template>
  <transition name="slide-down" appear>
    <div class="sticky-top bg-light">
      <nav class="container navbar navbar-expand-lg navbar-light">
        <router-link class="logo navbar-brand fs-1" to="/" @click="closeNavHam">Max</router-link>
        <button class="navbar-toggler" type="button" aria-controls="navbarNavAltMarkup" aria-expanded="false"
          aria-label="Toggle navigation" @click="toggleNavHam">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" ref="collapse">
          <div class="navbar-nav align-items-center">
            <router-link class="nav-item nav-link me-3 h5" to="/about" @click="closeNavHam">品牌</router-link>
            <router-link class="nav-item nav-link me-3 h5" to="/products" @click="closeNavHam">香氛蠟燭</router-link>
            <router-link class="nav-item nav-link me-3 h5" to="/questions" @click="closeNavHam">常見問題</router-link>
            <router-link class="nav-item nav-link me-3 d-lg-none h5" to="/cart" @click="closeNavHam">購物車</router-link>
            <router-link class="nav-item nav-link position-relative d-none d-lg-block h5" @click="closeNavHam"
              to="/cart"><i class="bi bi-bag fs-5"></i>
              <span class="
                    position-absolute
                    top-10
                    start-90
                    translate-middle
                    badge
                    rounded-pill
                    bg-danger
                  ">
                {{ cartLength }}
              </span></router-link>
          </div>
        </div>
      </nav>
    </div>
  </transition>
</template>
<style scoped>
/* 進場：從上面滑下來 */
.slide-down-enter-active {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}

/* 離場：可選擇淡出效果（可加可不加） */
.slide-down-leave-active {
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
}

.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>