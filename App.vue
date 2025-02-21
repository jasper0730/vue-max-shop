<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
body {
  background-color: #f8f9fa;
}

a {
  color: #495057;
  text-decoration: underline;
}

table {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

.logo {
  font-family: "Allura", cursive;
}

.object-fit {
  object-fit: cover;
}

// 過場動畫
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
