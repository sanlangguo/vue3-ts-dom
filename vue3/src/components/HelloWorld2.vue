<template>
  <transition name="model">
    <div class="info-wrapper" v-if="showModal">
      <div class="info">没有输入</div>
    </div>
  </transition>
  <button @click="change">click</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
let showModal = ref(false);
function change() {
  showModal.value = !showModal.value;
}
</script>
<style>
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}
</style>