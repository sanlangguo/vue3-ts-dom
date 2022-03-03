<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Approved by">
      <el-input v-model="formInline.name" placeholder="name"></el-input>
    </el-form-item>
    <el-form-item label="Activity zone">
       <el-input v-model="formInline.psd" placeholder="psd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { login } from '@/api/index.ts'
import { createRouter } from '../router/path'
import { useRouter } from "vue-router"
import { reactive } from 'vue'
const router = useRouter()
const formInline = reactive({
  name: '',
  psd: '',
})

const onSubmit = async () => {
  if (formInline.name && formInline.psd) {
    const res = await login(formInline)
    // 动态创建路由
    createRouter(res.pathArr)
    router.push('home')
    localStorage.setItem('userInfo', JSON.stringify(res))
  }
}
</script>
