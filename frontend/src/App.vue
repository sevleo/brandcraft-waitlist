<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <Toast />
  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>
</template>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  opacity: 0;
  animation: movingIn 0.3s;
}

.fade-leave-active {
  animation: movingOut 0.3s;
}

@keyframes movingIn {
  0% {
    /* transform: translateY(-30px); */
    opacity: 0;
  }

  100% {
    /* transform: translateY(0px); */
    opacity: 1;
  }
}

@keyframes movingOut {
  0% {
    /* transform: translateY(0px); */
    opacity: 1;
  }

  100% {
    /* transform: translateY(100px); */
    opacity: 0;
  }
}
</style>
