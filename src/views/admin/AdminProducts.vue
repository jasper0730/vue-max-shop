<script setup lang="ts">
import { currency } from '@/utils/format.ts';
import { onMounted, ref } from 'vue';
import Pagination from '@/components/Pagination.vue';
import Loading from 'vue-loading-overlay';
import AdminProductModal from '@/components/AdminProductModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import Modal from 'bootstrap/js/dist/modal';
import axios from 'axios';
import type { ProductType } from '@/types/types';

const API_URL = import.meta.env.VITE_API;
const API_PATH = import.meta.env.VITE_PATH;


const products = ref<ProductType[]>([]);
const pagination = ref({});
const isLoading = ref(false);
const isModalOpen = ref(false);
const tempProduct = ref<ProductType>({
  title: '',
  category: '',
  origin_price: 0,
  price: 0,
  is_enabled: false,
});
const deleteModalElement = ref<InstanceType<typeof DeleteModal> | null>(null);
let bsModal: Modal | null = null;

const getProducts = async (page: number = 1) => {
  try {
    isLoading.value = true;
    const url = `${API_URL}/api/${API_PATH}/admin/products?page=${page}`;
    const res = await axios.get(url);
    if (res.data.success) {
      products.value = res.data.products;
      pagination.value = res.data.pagination;
    } else {
      throw new Error(res.data.message || '獲取資料失敗');
    }
  } catch (error) {
    console.error('獲取資料失敗', error);
  } finally {
    isLoading.value = false;
  }
};

const openModal = (isNew: boolean, item?: ProductType) => {
  if (!isNew && item) {
    tempProduct.value = { ...item };
  } else {
    tempProduct.value = {
      title: '',
      category: '',
      origin_price: 0,
      price: 0,
      is_enabled: false,
    };
  }
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const deleteItem = async () => {
  try {
    isLoading.value = true;
    const url = `${API_URL}/api/${API_PATH}/admin/product/${tempProduct.value.id}`;
    const res = await axios.delete(url);

    if (res.data.success) {
      getProducts();
    } else {
      throw new Error(res.data.message || '刪除失敗');
    }
  } catch (error) {
    console.error('刪除產品失敗', error);
  } finally {
    isLoading.value = false;
  }
  bsModal?.hide();
};

const openDeleteModal = (item: ProductType) => {
  tempProduct.value = { ...item };
  if (deleteModalElement.value) {
    bsModal = new Modal(deleteModalElement.value.$el);
    bsModal.show();
  }
};

const updateProduct = async (item: ProductType) => {
  try {
    isLoading.value = true;
    const url = tempProduct.value.id
      ? `${API_URL}/api/${API_PATH}/admin/product/${tempProduct.value.id}`
      : `${API_URL}/api/${API_PATH}/admin/product`;

    const method = tempProduct.value.id ? 'put' : 'post';
    const res = await axios[method](url, { data: item });

    if (res.data.success) {
      getProducts();
      isModalOpen.value = false;
    } else {
      throw new Error(res.data.message || '儲存失敗');
    }
  } catch (error) {
    console.error('儲存產品失敗', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getProducts();
});
</script>
<template>
  <Loading :active="isLoading || isLoading" :z-index="1060"></Loading>
  <div class="pb-5">
    <div class="text-end mt-3">
      <button type="button" class="btn btn-dark rounded" @click="() => openModal(true)">
        建立新的產品
      </button>
    </div>
    <div class="mt-4 overflow-auto">
      <div class="product-table" style="min-width: 700px">
        <div class="thead fw-bold pb-2 border-bottom border-3 border-dark">
          <div class="tr d-flex">
            <div class="th px-1 py-2" style="flex: 1; min-width: 100px">分類</div>
            <div class="th px-1 py-2" style="flex: 2; min-width: 200px">產品名稱</div>
            <div class="th px-1 py-2" style="flex: 1; min-width: 100px">原價</div>
            <div class="th px-1 py-2" style="flex: 1; min-width: 100px">售價</div>
            <div class="th px-1 py-2" style="flex: 1; min-width: 100px">是否啟用</div>
            <div class="th px-1 py-2" style="flex: 1; min-width: 100px">編輯</div>
          </div>
        </div>
        <div class="tbody pt-2">
          <div class="tr d-flex border-bottom" v-for="item in products" :key="item.id">
            <div class="td px-1 py-2" style="flex: 1; min-width: 100px">{{ item.category }}</div>
            <div class="td px-1 py-2" style="flex: 2; min-width: 200px">{{ item.title }}</div>
            <div class="td px-1 py-2" style="flex: 1; min-width: 100px">
              {{ currency(item.origin_price) }}
            </div>
            <div class="td px-1 py-2" style="flex: 1; min-width: 100px">
              {{ currency(item.price) }}
            </div>
            <div
              v-if="item.is_enabled"
              class="td px-1 py-2 text-success"
              style="flex: 1; min-width: 100px"
            >
              啟用
            </div>
            <div v-else class="td px-1 py-2 text-danger" style="flex: 1; min-width: 100px">
              未啟用
            </div>
            <div style="flex: 1; min-width: 100px">
              <button
                type="button"
                class="btn btn-outline-dark rounded btn-sm"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-dark rounded btn-sm ms-1"
                @click="() => openDeleteModal(item)"
              >
                刪除
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination @update-page="getProducts" :pages="pagination"></Pagination>
  </div>
  <DeleteModal
    ref="deleteModalElement"
    @delete-item="deleteItem"
    :title="tempProduct.title"
  ></DeleteModal>
  <AdminProductModal
    :isModalOpen="isModalOpen"
    :tempProduct="tempProduct"
    @close="closeModal"
    @save="updateProduct"
  />
</template>
