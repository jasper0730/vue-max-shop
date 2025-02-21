import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API;
const API_PATH = import.meta.env.VITE_PATH;

export const useProductStore = defineStore('product', () => {
  const isLoading = ref(false);
  const products = ref([]);
  const selectedProduct = ref({});
  const isModalOpen = ref(false);
  const pagination = ref({});

  // 產品資料
  const getProducts = async (
    page: number | null = 1,
    category: string | null = null
  ) => {
    try {
      isLoading.value = true;
      let url = `${API_URL}/api/${API_PATH}/products`;

      if (page === null) {
        url += '/all';
      } else {
        url += `?page=${page}`;
        if (category) url += `&category=${category}`;
      };
      const res = await axios.get(url);
      if (res.data.success) {
        products.value = res.data.products;
        if (page !== null) pagination.value = res.data.pagination;
      } else {
        throw new Error(res.data.message || '獲取資料失敗');
      };
    } catch (error) {
      console.error('獲取資料失敗', error);
    } finally {
      isLoading.value = false;
    };
  };
  // 單一產品
  const openProductModal = async (id: string) => {
    try {
      isModalOpen.value = false;
      isLoading.value = true;
      const url = `${API_URL}/api/${API_PATH}/product/${id}`;
      const res = await axios.get(url);
      if (res.data.success) {
        selectedProduct.value = res.data.product;
        isModalOpen.value = true;
      } else {
        throw new Error(res.data.message || "獲取資料失敗");
      }
    } catch (error) {
      console.error("獲取資料失敗", error);
    } finally {
      isLoading.value = false;
    }
  };
  // 關閉產品燈箱
  const closeProductModal = () => {
    isModalOpen.value = false;
    selectedProduct.value = {};
  };
  return {
    products,
    getProducts,
    selectedProduct,
    openProductModal,
    closeProductModal,
    isModalOpen,
    pagination,
    isLoading
  };
});
