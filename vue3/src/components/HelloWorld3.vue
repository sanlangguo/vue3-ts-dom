<template>
  <ul v-if="todos.length">
    <transition-group name="flip-list" tag="ul">
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </transition-group>
  </ul>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
let width = ref(100);let todos = reactive([
  {
    title: 1,
    done: true
  },
  {
    title: 2,
    done: true
  },
  {
    title: 3,
    done: true
  },
  {
    title: 4,
    done: true
  },
  {
    title: 5,
    done: true
  }
])
</script>

<style>
.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>