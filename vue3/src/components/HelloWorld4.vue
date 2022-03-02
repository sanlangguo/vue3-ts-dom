<template>
  <div class="box" :style="{width: width + 'px'}"></div>
  <div class="box1"></div>
  <button @click="change">Click</button>
</template>
<script setup lang="ts">
import { ref } from "vue"
let width = ref(100);

function change(): void {
  width.value += 100
  console.log(width.value, 'width.value')
}
</script>

<style>
.box{
  width:30px;
  height:30px;
  position: relative;
  background:#d88986;
  animation: move 2s linear infinite;
}
@keyframes move {
  0% {left:0px}
  50% {left:200px}
  100% {left:0}
}
</style>