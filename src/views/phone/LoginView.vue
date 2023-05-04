<template>
  <div class="main">
    <div class="nav">
      <el-row style="font-size: 12px;color: #838383;height: 40px;line-height: 40px;text-align: center;">
        <el-col :span="8">中文(简体)
          <el-icon style="transform: translateY(3px);font-size: 16px;">
            <CaretBottom/>
          </el-icon>
        </el-col>
        <el-col :span="8"></el-col>
        <el-col :span="8">
          <el-icon style="transform: translateY(3px);font-size: 16px;margin-right: 15px;">
            <MapLocation/>
          </el-icon>
          帮助
        </el-col>
      </el-row>
    </div>
    <div class="title" style="text-align: center;font-size: 20px;font-weight: 600;">
      小梦账号登录
    </div>
    <div class="logo" style="width: 48px;height: 48px;border-radius: 18px;margin: 20px auto;">
      <img style="width: 48px;height: 48px;border-radius: 18px;margin: 20px auto;" src="@/assets/logo.png" alt=""
           sizes="" srcset="">
    </div>
    <div class="label" style="color:#838383;text-align: center;padding: 15px 0;font-size: 12px;">
      -&ensp;助&ensp;力&ensp;可&ensp;持&ensp;续&ensp;化&ensp;发&ensp;展&ensp;事&ensp;业&ensp;-
    </div>
    <div class="input_box">
      <el-input v-model="acc" placeholder="邮箱/手机号码/小梦ID"/>
      <el-input v-model="pwd" placeholder="请输入密码"/>
    </div>
    <div class="check">
      <el-row>
        <el-col :span="2">
          <el-checkbox></el-checkbox>
        </el-col>
        <el-col :span="22" style="line-height: 32px;color: #838383;font-size: 10px;">已阅读并同意小梦账号 <i>用户协议</i> 和
          <i>隐私政策</i></el-col>
      </el-row>
    </div>
    <div class="button">
      <el-button type="primary" @click="loginIN">登录</el-button>
    </div>
    <div class="list">
      <el-row>
        <el-col :span="8">手机号登陆&ensp;</el-col>
        <el-col :span="1.5">|</el-col>
        <el-col :span="7">立即注册</el-col>
        <el-col :span="1.5">|</el-col>
        <el-col :span="8">&ensp;忘记密码</el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import {ref} from "vue";
import {ElMessageBox} from 'element-plus'
import type {Action} from 'element-plus'

const acc = ref('')
const pwd = ref('')
const loginIN = () => {
  if (acc.value.length <= 0 || pwd.value.length <= 0) {
    ElMessageBox.alert('请填写账号或密码', '提示', {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: '确认',
      callback: (action: Action) => {
        // ElMessage({
        //   type: 'info',
        //   message: `action: ${action}`,
        // })
        console.log(action)
      },
    })
  } else {
    router.push({name: 'phone-home'})
  }
}
</script>

<style scoped>
.main {
  --main-width: 84%;
}

.input_box {
  padding-top: 30px;
  width: var(--main-width);
  margin: 0 auto;
}

div >>> .el-input__wrapper {
  width: 100% !important;
  height: 48px !important;
  border-radius: 16px;
  background: #f0f0f0;
  border: none;
  margin: 10px 0;
}

div >>> .el-input__wrapper:hover {
  border: 1px solid #0b84ff;
}

.check {
  width: var(--main-width);
  margin: 0 auto;
  padding: 10px 0;
}

.check i {
  color: #0b84ff;
  font-style: normal;
}

.check >>> .el-checkbox__inner {
  width: 20px;
  height: 20px;
  border-radius: 50% !important;
}

.check >>> .el-checkbox__inner::after {
  box-sizing: content-box;
  content: "";
  border: 1px solid var(--el-checkbox-checked-icon-color);
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(
      45deg
  ) scaleY(0);
  width: 5px;
  transition: transform .15s ease-in 50ms;
  transform-origin: center;
}

.button {
  margin: 10px auto;
  width: var(--main-width);
}

.button .el-button {
  width: 100%;
  height: 48px;
  border-radius: 25px;
  font-size: 16px;
}

.list {
  width: 55%;
  margin: 0 auto;
  text-align: center;
  color: #838383;
  font-size: 10px;
  padding: 10px 0;
}

</style>