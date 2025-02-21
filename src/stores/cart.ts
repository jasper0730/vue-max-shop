import { ref } from 'vue';
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API;
const API_PATH = import.meta.env.VITE_PATH;

export const useCartStore = defineStore('cart', () => {
  const isLoading = ref(false);
  const cartData = ref({});
  const useCoupon = ref(false);

  // 購物車資料
  const getCarts = async () => {
    try {
      const url = `${API_URL}/api/${API_PATH}/cart`;
      isLoading.value = true;
      const res = await axios.get(url);
      if (res.data.success) {
        cartData.value = res.data.data;
      } else {
        throw new Error(res.data.message || "購物車資料獲取失敗");
      };
    } catch (error) {
      console.error('購物車資料獲取失敗', error);
    } finally {
      isLoading.value = false;
    };
  };
  //  加入購物車
  const addToCart = async (id: string, qty = 1) => {
    try {
      isLoading.value = true;
      const url = `${API_URL}/api/${API_PATH}/cart`;
      const config = {
        data: {
          product_id: id,
          qty,
        }
      };
      const res = await axios.post(url, config);
      if (res.data.success) {
        Swal.fire({
          title: res.data.data.product.title,
          text: "加入購物車",
          icon: "success",
          timer: 3000,
        });
        getCarts();
      } else {
        throw new Error(res.data.message || "加入購物車失敗");
      };
    } catch (error) {
      Swal.fire({
        title: '失敗',
        text: "加入購物車",
        icon: "error",
        timer: 3000,
      });
      console.error("加入購物車失敗", error);
    } finally {
      isLoading.value = false;
    };
  };
  // 刪除
  const removeItem = async (
    item: {
      id: string;
      product: {
        title: string;
      };
    }) => {
    try {
      isLoading.value = true;
      const url = `${API_URL}/api/${API_PATH}/cart/${item.id}`;
      const res = await axios.delete(url);
      if (res.data.success) {
        Swal.fire({
          title: item.product.title || "成功",
          text: "移除",
          icon: "success",
          timer: 3000,
        });
        getCarts();
      } else {
        throw new Error(res.data.message || "移除失敗");
      };
    } catch (error) {
      Swal.fire({
        title: '失敗',
        text: "移除",
        icon: "error",
        timer: 3000,
      });
      console.error("移除失敗", error);
    } finally {
      isLoading.value = false;
    }
  };
  // 更新數量
  const updateItem = async (
    item: {
      qty: number;
      id: string;
    },
    action: string
  ) => {
    let qty = 0;
    if (item.qty > 0) {
      isLoading.value = true;
      switch (action) {
        case 'increase':
          qty = item.qty + 1;
          break;
        case 'decrease':
          qty = item.qty - 1;
          break;
      }
      try {
        isLoading.value = true;
        const url = `${API_URL}/api/${API_PATH}/cart/${item.id}`;
        const config = {
          data: {
            product_id: item.id,
            qty
          }
        };
        const res = await axios.put(url, config);
        if (res.data.success) {
          getCarts();
        } else {
          throw new Error(res.data.message || "數量更新失敗");
        }
      } catch (error) {
        console.error("數量更新失敗", error);
      } finally {
        isLoading.value = false;
      }
    }
  };
  // 結帳
  const createOrder = async (
    formData: {
      user: {
        name: string;
        email: string;
        tel: string | number;
        address: string;
      },
      message: string;
    },
    resetForm: () => void
  ) => {
    try {
      isLoading.value = true;
      const url = `${API_URL}/api/${API_PATH}/order`;
      const config = {
        data: formData
      };
      const res = await axios.post(url, config);
      if (res.data.success) {
        Swal.fire({
          title: "成功",
          text: "訂單已成立，感謝您的購買",
          icon: "success",
          timer: 3000,
        });
        resetForm();
        getCarts();
        cartData.value = {};
      } else {
        throw new Error(res.data.message || "訂單成立失敗");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: '失敗',
        text: "訂單未成立",
        icon: "error",
        timer: 3000,
      });
    } finally {
      isLoading.value = false;
    }
  };
  // 優惠券
  const addCoupon = async (coupon: string) => {
    try {
      isLoading.value = true;
      const url = `${API_URL}/api/${API_PATH}/coupon`;
      const config = {
        data: {
          code: coupon
        }
      };
      const res = await axios.post(url, config);
      if (res.data.success) {
        useCoupon.value = true;
        Swal.fire({
          title: "成功",
          text: "套用優惠券",
          icon: "success",
          timer: 3000,
        });
        getCarts();
      } else {
        throw new Error(res.data.message || "優惠券無法使用");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: '失敗',
        text: "套用優惠券",
        icon: "error",
        timer: 3000,
      });
    } finally {
      isLoading.value = false;
    }
  };

  return {
    cartData,
    getCarts,
    isLoading,
    addToCart,
    removeItem,
    updateItem,
    createOrder,
    addCoupon,
    useCoupon
  };
});
