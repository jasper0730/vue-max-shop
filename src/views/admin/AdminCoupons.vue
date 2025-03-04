<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { date } from '@/utils/format.ts';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Pagination from '@/components/Pagination.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import Modal from 'bootstrap/js/dist/modal';
import type { CouponType } from '@/types/types';
import AdminCouponModal from '@/components/AdminCouponModal.vue';

const API_URL = import.meta.env.VITE_API;
const API_PATH = import.meta.env.VITE_PATH;
const isLoading = ref(false);
const isCreate = ref(false);
const coupons = ref<CouponType[]>([]);
const pagination = ref({});
const deleteModalElement = ref<InstanceType<typeof DeleteModal> | null>(null);
const couponModalElement = ref<InstanceType<typeof AdminCouponModal> | null>(null);
const tempCoupon = ref<CouponType>({
  code: '',
  due_date: 0,
  id: 'string',
  is_enabled: 0,
  num: 0,
  percent: 0,
  title: '',
});
let deleteModal: Modal | null = null;

const getCoupons = async (page = 1) => {
  try {
    isLoading.value = true;
    const url = `${API_URL}/api/${API_PATH}/admin/coupons?page=${page}`;
    const res = await axios.get(url);
    if (res.data.success) {
      coupons.value = res.data.coupons;
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

const updateCoupon = async (item: CouponType) => {
  try {
    isLoading.value = true;
    const url = tempCoupon.value.id
      ? `${API_URL}/api/${API_PATH}/admin/coupon/${tempCoupon.value.id}`
      : `${API_URL}/api/${API_PATH}/admin/coupon`;

    const method = tempCoupon.value.id ? 'put' : 'post';
    const res = await axios[method](url, { data: item });

    if (res.data.success) {
      getCoupons();
    } else {
      throw new Error(res.data.message || '儲存優惠券失敗');
    }
  } catch (error) {
    console.error('儲存優惠券失敗', error);
  } finally {
    isLoading.value = false;
  }
};

const openDeleteModal = (item: CouponType) => {
  tempCoupon.value = { ...item };
  if (deleteModalElement.value) {
    deleteModal = new Modal(deleteModalElement.value.$el);
    deleteModal.show();
  }
};

const openCouponModal = (isNew: boolean, item?: CouponType) => {
  isCreate.value = isNew;
  if (!isNew && item) {
    tempCoupon.value = { ...item };
  } else {
    tempCoupon.value = {
      code: '',
      due_date: new Date().getTime(),
      id: '',
      is_enabled: 0,
      num: 0,
      percent: 0,
      title: '',
    };
  }

  if (couponModalElement.value) {
    couponModalElement.value.showModal();
  }
};
const deleteItem = async () => {
  try {
    isLoading.value = true;
    const url = `${API_URL}/api/${API_PATH}/admin/coupon/${tempCoupon.value.id}`;
    const res = await axios.delete(url);

    if (res.data.success) {
      getCoupons();
    } else {
      throw new Error(res.data.message || '優惠券刪除失敗');
    }
  } catch (error) {
    console.error('優惠券刪除失敗', error);
  } finally {
    isLoading.value = false;
  }
  deleteModal?.hide();
};

onMounted(() => {
  getCoupons();
});
</script>
<template>
  <div>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="text-end mt-3">
      <button class="btn btn-dark rounded" type="button" @click="() => openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <div class="d-flex justify-content-center">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupons" :key="key">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ date(item.due_date /1000) }}</td>
            <td>
              <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
              <span v-else class="text-muted">未啟用</span>
            </td>
            <td>
              <button
                class="btn btn-outline-dark rounded btn-sm ms-1"
                @click="() => openCouponModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-dark rounded btn-sm ms-1"
                @click="() => openDeleteModal(item)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <AdminCouponModal
      ref="couponModalElement"
      :isNew="isCreate"
      :coupon="tempCoupon"
      @update-coupon="updateCoupon"
    />
    <DeleteModal ref="deleteModalElement" @delete-item="deleteItem" :title="tempCoupon.title" />
    <Pagination :pages="pagination" @update-page="getCoupons" />
  </div>
</template>
<style scope>
.table {
  max-width: 1000px;
  width: 100%;
  --bs-table-bg: transprants;
  background-color: var(--bs-table-bg);
}
th,
td:nth-child(1) {
  width: 200px;
}
th,
td:nth-child(2) {
  width: 200px;
}
th,
td:nth-child(3) {
  width: 200px;
}
th,
td:nth-child(4) {
  width: 200px;
}
th,
td:nth-child(5) {
  width: 200px;
}
</style>
