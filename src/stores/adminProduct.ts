// stores/adminProduct.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import type { ProductType } from '@/types/types';

const API_URL = import.meta.env.VITE_API;
const API_PATH = import.meta.env.VITE_PATH;

export const useAdminProductStore = defineStore('product', () => {
  const isLoading = ref(false);
  const isModalOpen = ref(false);
  const isDeleteModalOpen = ref(false);
  const products = ref<ProductType[]>([]);
  const pagination = ref({});
  const tempProduct = ref<ProductType>({
    title: '',
    category: '',
    origin_price: 0,
    price: 0,
    is_enabled: false,
  });

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

  const updateProduct = async (productData: ProductType) => {
    try {
      isLoading.value = true;
      const url = productData.id
        ? `${API_URL}/api/${API_PATH}/admin/product/${productData.id}`
        : `${API_URL}/api/${API_PATH}/admin/product`;
      const method = productData.id ? 'put' : 'post';
      const res = await axios[method](url, { data: productData });

      if (res.data.success) {
        await getProducts();
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

  const deleteProduct = async (id: number) => {
    try {
      isLoading.value = true;
      const url = `${API_URL}/api/${API_PATH}/admin/product/${id}`;
      const res = await axios.delete(url);

      if (res.data.success) {
        await getProducts();
        isDeleteModalOpen.value = false;
      } else {
        throw new Error(res.data.message || '刪除失敗');
      }
    } catch (error) {
      console.error('刪除產品失敗', error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    products,
    pagination,
    isLoading,
    isModalOpen,
    tempProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    isDeleteModalOpen
  };
});
