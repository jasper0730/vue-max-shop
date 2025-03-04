<template>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: #f8f9fa;
}

a {
  color: #495057;
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

// 動畫
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-active {
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
}

.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
