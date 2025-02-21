<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { Swiper, SwiperSlide, Autoplay, Pagination } from "@/libs/swiper";
import { useProductStore } from '../stores/product';
import { useCartStore } from '../stores/cart';


const productStore = useProductStore();
const cartStore = useCartStore();
const products = computed(() => productStore.products);
const swiperConfig = {
  modules: [Autoplay, Pagination],
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
};

onMounted(() => {
  productStore.getProducts();
})


</script>
<template>
  <div class="pb-3 container">
    <h3 class="text-center mb-3 fw-bold">熱銷商品</h3>
    <div>
      <swiper :modules="swiperConfig.modules"
        :breakpoints="swiperConfig.breakpoints" :autoplay="swiperConfig.autoplay">
        <swiper-slide v-for="item in products" :key="item.id">
          <div class="card-group">
            <div class="
                card
                border-0
                position-relative position-relative
                text-center
              ">
              <img :src="item.imageUrl" class="card-img-top rounded-0 object-fit" alt="..."
                style="height: 200px; object-position: center right" />
              <a href="#" class="text-dark"></a>
              <div class="card-body p-0 bg-light">
                <h4 class="mb-1 mt-3 fs-5">
                  <a href="#" class="text-decoration-none text-dark">{{
                    item.title
                  }}</a>
                </h4>
                <p class="card-text mb-3 text-danger">
                  NT$ {{ item.price }}
                  <span class="text-muted"><del>NT$ {{ item.origin_price }}</del></span>
                </p>
              </div>
              <div class="card-footer border-0">
                <button type="button" class="btn-outline-dark btn btn-sm rounded mb-5"
                  @click.prevent="cartStore.addToCart(item.id)">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
