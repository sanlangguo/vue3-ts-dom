<template>
  <div>
    关于我们name:-->
    {{ us.name }}
  </div>
</template>

<script setup lang="ts">
import { login } from '../server/api/login'
let us = reactive({
  name: '',
})
const res = await login()
us = res
console.log(res, '--')


</script>