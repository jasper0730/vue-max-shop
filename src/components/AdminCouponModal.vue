<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
import Modal from 'bootstrap/js/dist/modal';
import type { CouponType } from '@/types/types';

const props = defineProps<{ isNew: boolean; coupon: CouponType }>();
const emit = defineEmits(['update-coupon']);
const modalElement = ref<HTMLElement | null>(null);
let bootstrapModal: Modal | null = null;

const tempCoupon = ref<CouponType>({ ...props.coupon });
const dueDate = ref<string>(new Date(tempCoupon.value.due_date).toISOString().split('T')[0]);

watch(
  () => props.coupon,
  (newCoupon) => {
    tempCoupon.value = { ...newCoupon };
  },
  { deep: true, immediate: true },
);

const saveCoupon = () => {
  tempCoupon.value.due_date = new Date(dueDate.value).getTime();
  emit('update-coupon', tempCoupon.value);
  hideModal();
};

const showModal = () => {
  console.log('111');
  bootstrapModal?.show();
};

const hideModal = () => {
  bootstrapModal?.hide();
};

onMounted(() => {
  if (modalElement.value) {
    bootstrapModal = new Modal(modalElement.value);
  }
});

defineExpose({ showModal, hideModal });
</script>

<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
    ref="modalElement"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="couponModalLabel">
            {{ isNew ? '新增優惠券' : '編輯優惠券' }}
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="tempCoupon.title"
              placeholder="請輸入標題"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              v-model="tempCoupon.code"
              placeholder="請輸入優惠碼"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="dueDate" />
          </div>
          <div class="mb-3">
            <label for="percent">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="percent"
              min="0"
              max="100"
              v-model.number="tempCoupon.percent"
              placeholder="請輸入折扣百分比"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="is_enabled"
              v-model="tempCoupon.is_enabled"
              :true-value="1"
              :false-value="0"
            />
            <label class="form-check-label" for="is_enabled">是否啟用</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            關閉
          </button>
          <button type="button" class="btn btn-dark" @click="saveCoupon">
            {{ isNew ? '新增優惠券' : '更新優惠券' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
