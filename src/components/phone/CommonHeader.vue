<template>
  <div class="main">
    <div class="logo">
      <img src="@/assets/logo.png"/>
    </div>
    <div class="button">
      <el-button type="text" style="color: white;font-size: 16px;margin-right: 8px;" @click="openLogin">
        <el-icon v-if="!login">
          <User/>
        </el-icon>
        <el-icon v-if="login">
          <CloseBold/>
        </el-icon>
      </el-button>
      <el-button type="text" style="color: white;font-size: 16px;" @click="openMenu">
        <el-icon v-if="!menu">
          <CollectionTag/>
        </el-icon>
        <el-icon v-if="menu">
          <CloseBold/>
        </el-icon>
      </el-button>
    </div>
  </div>

  <div class="drawer drawer_login" v-if="login">
    <div class="drawer_box">
      <el-row>
        <el-col :span="12">
          <div class="login one" @click="toLogin">登录</div>
        </el-col>
        <el-col :span="12">
          <div class="login two" @click="toRegister">注册</div>
        </el-col>
      </el-row>
    </div>
  </div>

  <div class="drawer drawer_menu" v-if="menu">
    <div class="drawer_box">
      <div class="menu_item" v-for="item in menuList" :key="item" @click="toPath(item)">
        <el-row>
          <el-col :span="23">
            {{ item.label }}
          </el-col>
          <el-col :span="1">
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import router from "@/router";

const login = ref(false);
const menu = ref(false);
const openLogin = () => {
  login.value = !login.value;
  menu.value = false;
}
const openMenu = () => {
  menu.value = !menu.value;
  login.value = false;
}
const menuList = reactive([{
  label: '小梦官网',
  path: '/phone-home',
}, {
  label: '绿色回收',
  path: '/phone-recycle',
}, {
  label: '学长二手',
  path: '/phone-second',
}, {
  label: '小梦开放平台',
  path: '/phone-open',
}, {
  label: '社会合作',
  path: '/phone-cooperation',
}, {
  label: '账号管理',
  path: '/phone-manage',
}])
const toLogin = () => {
  router.push({path: '/phone-login'});
}
const toRegister = () => {
  router.push({path: '/phone-register'});
}
const toPath = (item: { path: any; }) => {
  router.push({path: item.path})
  menu.value = false;
  login.value = false;
}
</script>

<style scoped>
.main {
  margin: 0 auto;
  width: 92vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo,
.logo img {
  width: 26px;
  height: 26px;
  border-radius: 10px;
}

.drawer {
  width: 100vw;
  background: rgba(0, 0, 0, .9);
  position: fixed;
  left: 0;
  top: 50px;
  opacity: 1;
}

.drawer_box {
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #666;
}

.drawer_login {
  height: 50px;
}

.login {
  height: 16px;
  line-height: 16px;
  transform: translateY(17px);
  text-align: center;
  color: white;
  font-size: 12px;
}

.one {
  border-right: 1px solid #fff;
}

.drawer_menu {
  height: auto;
}

.menu_item {
  height: 50px;
  line-height: 50px;
  color: white;
  font-size: 12px;
  padding-left: 10px;
}

.menu_item:hover {
  background: rgba(255, 255, 255, .1);
}


</style>