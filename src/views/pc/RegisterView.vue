<template>
  <div class="LoginView">
    <el-row>
      <el-col :span="6">
        <div class="banner">
          <!--          <img src="https://mp-f72177b8-1fab-46ad-a38c-c6556eac7a3b.cdn.bspapp.com/cloudstorage/7038a077-a564-4091-980d-498ff019f255.jpg">-->
          <img src="@/assets/banner.jpg" @click="router.push({name:'home'})">
        </div>
      </el-col>
      <el-col :span="18">
        <el-card shadow="never">
          <el-row>
            <el-col :span="4" class="l_container">
              <div class="logo"><img src="@/assets/logo.png"></div>
              <h2>小梦账号</h2>
            </el-col>
            <el-col :span="11"></el-col>
            <el-col :span="9" class="nav_aside">
              <el-menu mode="horizontal">
                <el-menu-item index="1">用户协议</el-menu-item>
                <el-menu-item index="2">隐私政策</el-menu-item>
                <el-menu-item index="3">帮助中心</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="never" class="nav">
          <el-card class="main_view">
            <el-menu mode="horizontal" default-active="/register" class="login_menu" router>
              <el-menu-item index="/login">登录</el-menu-item>
              <el-menu-item index="/register">注册</el-menu-item>
            </el-menu>
            <!--输入框-->
            <el-form
                ref="formRef"
                :rules="rules"
                :model="registerForm">
              <el-form-item
                  prop="account">
                <el-input
                    placeholder="手机号码/QQ号/微信号"
                    v-model="registerForm.account"/>
              </el-form-item>
              <el-form-item
                  prop="pwd">
                <el-input
                    placeholder="密码"
                    v-model="registerForm.pwd"
                    type="password"/>
              </el-form-item>
              <el-form-item>
                <el-radio v-model="radio" label=true>已阅读并同意小梦帐号 用户协议 和 隐私政策</el-radio>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="loginIn(formRef)">注册</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'
import {ElMessage} from "element-plus";
import axios from "@/axios";

const radio = ref(false)
const formRef = ref<FormInstance>()
const registerForm = reactive({
  account: '',
  pwd: '',
})
const rules = reactive<FormRules>({
  account: [
    {required: true, message: '请填写账号', trigger: 'blur'},
    {min: 6, max: 11, message: '长度必须在6~11位之间', trigger: 'blur'},
  ],
  pwd: [
    {required: true, message: '请填写密码'},
    {min: 6, max: 20, message: '长度必须大于6位', trigger: 'blur'},]
})

const loginIn = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      if (!radio.value) {
        ElMessage.warning("请勾选用户协议与隐私政策");
        return;
      }
      axios.post('/user/register', {
        account: registerForm.account,
        password: registerForm.pwd,
      }).then((res) => {
        console.log(res)
        if (res.data.code === "-1") {
          ElMessage.error("账号已存在")
          return;
        }
        if (res.data.code === "200") {
          ElMessage.success("注册成功")
          registerForm.account = null;
          registerForm.pwd = null;
          return;
        }
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped>
.LoginView {
  height: 100vh;
}

img,
.banner {
  width: 100%;
  height: 100vh;
}

.el-card {
  border: none;
}

.l_container {
  display: flex;
  flex-direction: row;
}

h2 {
  margin: 0 10px;
  line-height: 40px;
  color: #333;
}

.logo,
.logo img {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.el-menu {
  border: none;
  --el-menu-text-color: #838383;
  --el-menu-bg-color: #fff;
  --el-menu-hover-bg-color: #fff;
}

.nav_aside {
  padding-left: 150px;
}

.nav_aside > .el-menu .el-menu-item.is-active {
  border: none;
  color: #838383;
  font-weight: 400;
}

.main_view {
  width: 450px;
  margin: 0 auto;
  border-radius: 20px;
}

div /deep/ .login_menu {
  --el-menu-active-color: #333;
  --el-menu-text-color: #838383;
  --el-menu-hover-text-color: #333;
  --el-menu-item-font-size: 20px;
  --el-menu-item-height: 40px;
  --el-menu-border-color: none;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 4px solid green;
  font-weight: 800;
}

.el-menu-item {
  padding: 0;
  margin: 0 10px;
}

.el-form {
  margin-top: 30px;
}

.el-input {
  padding: 10px 0;
}

div /deep/ .el-input__inner {
  font-size: 16px;
  padding: 30px 0;
}

div /deep/ .el-input__wrapper {
  /*background-color: #f1f2f3;*/
  border: none;
}

.el-button {
  font-size: 18px;
  width: 100%;
  height: 70px;
  background-color: #00a86a;
  border: none;
}

.el-radio {
  /*   #25df78   */
  /*--el-radio-font-size: var(--el-font-size-base);*/
  /*--el-radio-text-color: var(--el-text-color-regular);*/
  /*--el-radio-font-weight: var(--el-font-weight-primary);*/
  /*--el-radio-input-height: 14px;*/
  /*--el-radio-input-width: 14px;*/
  /*!*--el-radio-input-border-radius: var(--el-border-radius-circle);*!*/
  --el-radio-input-border-radius: 4px;
  /*--el-radio-input-bg-color: var(--el-fill-color-blank);*/
  /*--el-radio-input-border: var(--el-border);*/
  /*--el-radio-input-border-color: var(--el-border-color);*/
  /*--el-radio-input-border-color-hover: var(--el-color-primary);*/
}

</style>