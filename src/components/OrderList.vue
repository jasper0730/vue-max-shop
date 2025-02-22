<script setup lang="ts">
import { computed } from 'vue';

import { currency } from '../utils/format';
const props = defineProps<{
  cartData: {
    carts: {
      id: string;
      product: {
        title: string;
      };
      qty: number;
      total: number;
    }[];
    total: number;
    final_total: number;
  };
}>();

const cartData = computed(() => props.cartData);
</script>
<template>
  <h4 class="fw-bold mb-4">訂購明細</h4>
  <div class="pt-4">
    <div class="pb-4 border-bottom">
      <div v-for="item in cartData?.carts" :key="item.id">
        <div class="d-flex justify-content-between text-muted">
          <p class="w-50">{{ item.product.title }} x {{ item.qty }}</p>
          <p>NT$ {{ currency(item.total) }}</p>
        </div>
      </div>
    </div>
    <div class="pt-4 d-flex justify-content-between text-muted">
      <p>費用</p>
      <p>NT$ {{ currency(cartData?.total) }}</p>
    </div>
    <div class="d-flex justify-content-between text-muted">
      <p>折扣</p>
      <p>
        -{{
          currency(cartData?.total - cartData?.final_total)
        }}
      </p>
    </div>
  </div>
  <div class="d-flex justify-content-between mt-4">
    <p class="mb-0 h4 fw-bold">總金額</p>
    <p class="mb-0 h4 fw-bold">
      NT$ {{ currency(Math.round(cartData?.final_total)) }}
    </p>
  </div>
</template>
