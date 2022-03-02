<template>
  <transition name="modal">
    <h1 v-show="showTitle">你好测试</h1>
  </transition>
  <button @click="change">click</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
let showTitle = ref(true);
function change() {
  showTitle.value = !showTitle.value;
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>