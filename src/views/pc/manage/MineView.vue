<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="22">
          <span style="font-weight: 800;display: block;line-height: 30px;">>>>我的信息</span>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="open1">修改</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="always" style="width: 96%;height: 300px;margin: 0 auto;border-radius: 20px;margin-top: 40px;">
      <el-row style="margin-top: 20px;">
        <el-col :span="4">
          <div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
            <div style="width: 200px;height: 200px;background: white;border-radius: 10px;">
              <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="头像">
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <div style="line-height: 30px;">
            <span style="font-weight: 800;display: block;">账号：2109664977</span>
            <span style="font-weight: 800;display: block;">密码：{{ form.password }}</span>
            <span style="font-weight: 800;display: block;">姓名：{{ form.name }}</span>
            <span style="font-weight: 400;display: block;">性别：{{ form.sex }}</span>
            <span style="font-weight: 400;display: block;">年龄：{{ form.age }}</span>
            <span style="font-weight: 400;display: block;">地址：{{ null }}</span>
            <span style="font-weight: 400;display: block;">个人介绍:{{ null }}</span>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {h, onBeforeMount, reactive} from 'vue'
import {ElNotification} from 'element-plus'

const open1 = () => {
  ElNotification({
    title: '提示',
    message: h('i', {style: 'color: teal'}, '请填写上述表单'),
  })
}

let form = reactive({
  user_id: -1,
  account: '',
  age: '',
  name: '',
  password: '',
  sex: '',
})

const readLocalStorage = () => {
  let user = JSON.parse(localStorage.getItem('user'))
  if (user === null) {
    user = {
      user_id: -1,
      account: '',
      age: '',
      name: '',
      password: '',
      sex: '',
    }
    form = user
  } else {
    form = user
  }
}
onBeforeMount(() => {
  readLocalStorage();
})
</script>

<style scoped>

</style>