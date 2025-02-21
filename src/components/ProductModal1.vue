<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useProductStore } from '../stores/product';
import { useCartStore } from '../stores/cart';
import Modal from 'bootstrap/js/dist/modal';

const productStore = useProductStore();
const cartStore = useCartStore();
const modalElement = ref(null);
const qty = ref(1);
let bsModal: Modal | null = null;

watch(() => productStore.isModalOpen, (newValue) => {
  console.log('newValue', newValue);
  if (newValue) {
    bsModal.show();
  } else {
    bsModal.hide();
  }
});

onMounted(() => {
  bsModal = new Modal(modalElement.value);
});

</script>

<template>
  <div ref="modalElement" class="modal fade flex-column justify-content-center" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">{{ productStore.selectedProduct?.title || "未選擇商品" }}</h5>
          <button type="button" class="btn-close btn-close-white" @click="productStore.closeProductModal"></button>
        </div>
        <div class="modal-body">
          <div v-if="productStore.selectedProduct?.id" class="row">
            <div class="col-sm-6">
              <img class="img-fluid object-fit" :src="productStore.selectedProduct.imageUrl"
                :alt="productStore.selectedProduct.title" />
            </div>
            <div class="col-sm-6">
              <h5>
                <span class="badge mb-1 bg-secondary rounded-pill fs-7">{{ productStore.selectedProduct.category
                }}</span>
              </h5>
              <h4 class="fs-6">商品描述:</h4>
              <p class="fs-7">{{ productStore.selectedProduct.description }}</p>
              <h4 class="fs-6 mt-3">商品內容:</h4>
              <p class="fs-7">{{ productStore.selectedProduct.content }}</p>
              <div
                v-if="!productStore.selectedProduct.price || productStore.selectedProduct.origin_price === productStore.selectedProduct.price">
                <p class="h5">{{ productStore.selectedProduct.origin_price }}</p>
              </div>
              <div v-else>
                <del class="h6 text-secondary">售價：{{ productStore.selectedProduct.origin_price }}</del>
                <div class="h5 fw-bold text-danger">優惠價：{{ productStore.selectedProduct.price }}</div>
                <div class="input-group mb-3">
                  <input type="number" class="form-control" v-model.number="qty" min="1" />
                  <!-- 若input綁定的qty為false或是等於小於0怎無法按按鈕 -->
                  <button :disabled="qty <= 0 || !qty" class="btn btn-outline-dark" type="button"
                    @click="cartStore.addToCart(productStore.selectedProduct.id, qty)">
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p class="text-center">商品載入中...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
