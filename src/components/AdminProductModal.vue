<script setup lang="ts">
import { ref, watch } from 'vue';
import type { PropType } from 'vue';
import Modal from './Modal.vue';
import type { ProductType } from '@/types/types';

const props = defineProps({
  isModalOpen: {
    type: Boolean,
    default: false,
  },
  tempProduct: {
    type: Object as PropType<ProductType>,
    default: () => ({
      title: '',
      category: '',
      origin_price: 0,
      price: 0,
      is_enabled: false,
    }),
  },
  isNew: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close', 'save']);

const product = ref<ProductType>({ ...props.tempProduct });
const fileUploadingStatus = ref(false);

watch(
  () => props.tempProduct,
  (newValue) => {
    product.value = { ...newValue };
  },
  { deep: true },
);

const handleSave = () => {
  emit('save', product.value);
};
</script>

<template>
  <Teleport to="body">
    <Modal :show="isModalOpen" @close="emit('close')">
      <div class="container bg-light z-1 p-0">
        <div class="content pb-5">
          <div class="header d-flex bg-dark text-light p-3 mb-3 justify-content-between">
            <div class="title fs-5">
              {{ isNew ? '新增產品' : '編輯產品' }}
            </div>
            <button
              type="button"
              class="btn-close btn-close-white focus-ring"
              @click="emit('close')"
            ></button>
          </div>
          <div class="body px-3 py-2">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="product.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="mb-3">
                  <label for="customFile" class="form-label">
                    或 上傳圖片 <i class="fas fa-spinner fa-spin" v-if="fileUploadingStatus"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control" ref="fileInput" />
                </div>
                <img class="img-fluid" :src="product.imageUrl" />
                <div class="mt-3" v-if="product.imagesUrl?.length">
                  <div v-for="(image, key) in product.imagesUrl" :key="key" class="mb-3">
                    <input
                      type="url"
                      class="form-control"
                      v-model="product.imagesUrl[key]"
                      placeholder="請輸入圖片連結"
                    />
                    <img class="img-fluid mt-2" :src="image" />
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm d-block w-100 mt-2"
                      @click="product.imagesUrl.splice(key, 1)"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
                <button
                  v-if="
                    !product.imagesUrl?.length || product.imagesUrl[product.imagesUrl.length - 1]
                  "
                  class="btn btn-outline-dark btn-sm d-block w-100 mt-2"
                  @click="product.imagesUrl?.push('')"
                >
                  新增圖片
                </button>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="product.title"
                    placeholder="請輸入標題"
                  />
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="product.category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位</label>
                    <input
                      type="text"
                      class="form-control"
                      id="unit"
                      v-model="product.unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      min="0"
                      v-model.number="product.origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model.number="product.price"
                      min="0"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    class="form-control"
                    id="description"
                    v-model="product.description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    class="form-control"
                    id="content"
                    v-model="product.content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="product.is_enabled"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled"> 是否啟用 </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer d-flex justify-content-end mt-3 gap-2 px-3">
            <button type="button" class="btn btn-secondary" @click="emit('close')">取消</button>
            <button type="button" class="btn btn-primary" @click="handleSave">儲存</button>
          </div>
        </div>
      </div>
    </Modal>
  </Teleport>
</template>
