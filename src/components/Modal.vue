<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  show: Boolean,
});
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="custom-modal">
      <div class="overlay" @click.self="$emit('close')"></div>
      <slot></slot>
    </div>
  </transition>
</template>

<style scoped>
.custom-modal {
  z-index: 1050;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
