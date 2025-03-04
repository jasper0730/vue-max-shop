<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, onMounted } from 'vue';
import { currency, date } from '@/utils/format.ts';
import Modal from 'bootstrap/js/dist/modal';
import type { OrderType } from '@/types/types';


const props = defineProps<{ order: OrderType }>();
const emit = defineEmits(['update-paid']);
const modalElement = ref<HTMLElement | null>(null);
let bootstrapModal: Modal | null = null;

const tempOrder = ref<OrderType>({ ...props.order });

watch(
  () => props.order,
  (newOrder) => {
    tempOrder.value = { ...newOrder };
  },
  { deep: true, immediate: true },
);

onMounted(() => {
  if (modalElement.value) {
    bootstrapModal = new Modal(modalElement.value);
  }
});

const showModal = () => {
  bootstrapModal?.show();
};

const hideModal = () => {
  bootstrapModal?.hide();
};

const updatePaidStatus = () => {
  emit('update-paid', { ...tempOrder.value });
  hideModal();
};

defineExpose({ showModal, hideModal });
</script>

<template>
  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
    ref="modalElement"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="orderModalLabel">訂單細節</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th>姓名</th>
                    <td>{{ tempOrder.user?.name || '無' }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user?.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user?.tel || '無' }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user?.address || '無' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th>訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ date(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">{{ date(tempOrder.paid_date) }}</span>
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>{{ currency(tempOrder.total) }}</td>
                  </tr>
                </tbody>
              </table>

              <h3>選購商品</h3>
              <table class="table">
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>{{ item.product.title }}</th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">{{ currency(item.final_total) }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="tempOrder.is_paid" />
                  <label class="form-check-label">
                    <span v-if="tempOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-dark" @click="updatePaidStatus">修改付款狀態</button>
        </div>
      </div>
    </div>
  </div>
</template>
