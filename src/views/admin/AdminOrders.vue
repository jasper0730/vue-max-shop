<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { currency, date } from '@/utils/format.ts';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Pagination from '@/components/Pagination.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import Modal from 'bootstrap/js/dist/modal';
import AdminOrderModal from '@/components/AdminOrderModal.vue';
import type { OrderType } from '@/types/types';

const API_URL = import.meta.env.VITE_API;
const API_PATH = import.meta.env.VITE_PATH;
const isLoading = ref(false);
const orders = ref<OrderType[]>([]);
const pagination = ref({});
const deleteModalElement = ref<InstanceType<typeof DeleteModal> | null>(null);
const orderModalElement = ref<InstanceType<typeof AdminOrderModal> | null>(null);
const tempOrder = ref<OrderType>({
  id: '',
  is_paid: false,
  create_at: 0,
  user: {
    name: '',
    email: '',
    tel: '',
    address: '',
  },
  products: [],
  total: 0,
  paid_date: null,
});
let deleteModal: Modal | null = null;

const getOrders = async (page = 1) => {
  try {
    isLoading.value = true;
    const url = `${API_URL}/api/${API_PATH}/admin/orders?page=${page}`;
    const res = await axios.get(url);
    if (res.data.success) {
      orders.value = res.data.orders;
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

const updatePaid = async (item: OrderType) => {
  try {
    isLoading.value = true;
    const url = `${API_URL}/api/${API_PATH}/admin/order/${item.id}`;
    const paid = {
      is_paid: item.is_paid,
    };
    const res = await axios.put(url, { data: paid });
    if (res.data.success) {
      getOrders();
    } else {
      throw new Error(res.data.message || '付款更新失敗');
    }
  } catch (error) {
    console.error('付款更新失敗', error);
  } finally {
    isLoading.value = false;
  }
};

const openDeleteModal = (item: OrderType) => {
  tempOrder.value = { ...item };
  if (deleteModalElement.value) {
    deleteModal = new Modal(deleteModalElement.value.$el);
    deleteModal.show();
  }
};
const openOrderModal = (item: OrderType) => {
  tempOrder.value = { ...item };
  if (orderModalElement.value) {
    orderModalElement.value.showModal();
  }
};

const deleteItem = async () => {
  try {
    isLoading.value = true;
    const url = `${API_URL}/api/${API_PATH}/admin/order/${tempOrder.value.id}`;
    const res = await axios.delete(url);

    if (res.data.success) {
      getOrders();
    } else {
      throw new Error(res.data.message || '訂單刪除失敗');
    }
  } catch (error) {
    console.error('訂單刪除失敗', error);
  } finally {
    isLoading.value = false;
  }
  deleteModal?.hide();
};

onMounted(() => {
  getOrders();
});
</script>
<template>
  <div class="pb-5">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="d-flex justify-content-center">
      <table class="table">
        <thead>
          <tr>
            <th width="10%">購買時間</th>
            <th width="25%">Email</th>
            <th width="25%">購買款項</th>
            <th width="15%">應付金額</th>
            <th width="15%">是否付款</th>
            <th width="10%">編輯</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in orders" :key="item.id">
            <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
              <td>{{ date(item.create_at) }}</td>
              <td><span v-if="item.user" v-text="item.user.email"></span></td>
              <td>
                <ul class="list-unstyled">
                  <li v-for="product in item.products" :key="product.id">
                    {{ product.product.title }}數量：{{ product.qty }}
                    {{ product.product.unit }}
                  </li>
                </ul>
              </td>
              <td class="text-right">
                {{ currency(Math.round(item.total)) }}
              </td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`paidSwitch${item.id}`"
                    v-model="item.is_paid"
                    @change="updatePaid(item)"
                  />
                  <label class="form-check-label" :for="`paidSwitch${item.id}`">
                    <span v-if="item.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </td>
              <td>
                <button
                  class="btn btn-outline-dark rounded btn-sm ms-1"
                  style="white-space: nowrap"
                  @click="() => openOrderModal(item)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-dark rounded btn-sm ms-1"
                  type="button"
                  @click="() => openDeleteModal(item)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <Pagination :pages="pagination" @update-page="getOrders"></Pagination>
    <DeleteModal ref="deleteModalElement" @delete-item="deleteItem"></DeleteModal>
    <AdminOrderModal
      ref="orderModalElement"
      :order="tempOrder"
      @update-paid="updatePaid"
    ></AdminOrderModal>
  </div>
</template>
<style scope>
.table {
  --bs-table-bg: transprants;
  background-color: var(--bs-table-bg);
}
</style>
