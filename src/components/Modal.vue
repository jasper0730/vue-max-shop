<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <transition name="fade">
    <div v-if="modelValue" class="modal-backdrop" @click.self="closeModal">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* 背景遮罩 */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal 內容 */
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* 關閉按鈕 */
.close-btn {
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background: #ff5f5f;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

/* 過場動畫 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
