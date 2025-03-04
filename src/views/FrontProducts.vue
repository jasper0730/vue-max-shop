<script setup lang="ts">
import { onMounted, computed } from 'vue';
import Pagination from '@/components/Pagination.vue';
import Loading from 'vue-loading-overlay';
import { currency } from '@/utils/format.ts';
import { useProductStore } from '@/stores/product.ts';
import { useCartStore } from '@/stores/cart.ts';
import ProductModal from '@/components/ProductModal.vue';

const productStore = useProductStore();
const cartStore = useCartStore();
const products = computed(() => productStore.products);
const isLoading = computed(() => productStore.isLoading || cartStore.isLoading);
const pagination = computed(() => productStore.pagination);

const categoryChangeHandler = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  if (target.value === '全部') {
    productStore.getProducts();
  } else {
    productStore.getProducts(1, target.value);
  }
};
onMounted(() => {
  productStore.getProducts();
});
</script>
<template>
  <div class="container py-3">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div v-intersect="{ animation: 'slide-left' }" class="row animated slide-left-start">
      <div class="col-md-3 col-sm-4 col">
        <select @change="categoryChangeHandler" class="form-select text-secondary bg-light rounded">
          <option selected>全部</option>
          <option>淡雅</option>
          <option>適中</option>
          <option>濃郁</option>
        </select>
      </div>
    </div>
  </div>
  <div v-intersect="{ animation: 'slide-up' }" class="container pb-5 animated slide-up-start">
    <Transition name="fade" appear>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 bg-light g-3">
        <div class="col" v-for="item in products" :key="item?.id">
          <div class="card border-0 mb-4 position-relative position-relative bg-light">
            <img
              :src="item?.imageUrl"
              class="card-img-top rounded-0 w-100 object-fit"
              alt="..."
              style="height: 200px"
            />
            <a href="#" class="text-dark">
              <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
            </a>
            <div class="card-body p-0 text-center">
              <h4 class="mt-3 fs-5 text-dark">
                {{ item?.title }}
              </h4>
              <p class="card-text text-muted mb-0">
                <span class="badge badge-outline rounded-pill bg-secondary">{{
                  item?.category
                }}</span>
              </p>
              <div v-if="item?.price === item?.origin_price">
                <p class="text-muted">售價 NT${{ currency(item?.origin_price) }}</p>
              </div>
              <div v-else>
                <p class="text-muted mb-0">
                  <del>原價 NT${{ currency(item?.origin_price) }}</del>
                </p>
                <p class="text-danger">優惠價 NT${{ currency(item?.price ?? 0) }}</p>
              </div>
              <button
                type="button"
                class="btn btn-sm btn-outline-dark rounded mb-2 w-100"
                @click.prevent="productStore.openProductModal(item?.id)"
              >
                產品介紹
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-dark rounded mb-2 w-100"
                @click.prevent="cartStore.addToCart(item?.id)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <Pagination @update-page="productStore.getProducts" :pages="pagination"></Pagination>
  </div>
  <ProductModal></ProductModal>
</template>
