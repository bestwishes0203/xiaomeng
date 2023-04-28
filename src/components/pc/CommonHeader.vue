<template>
  <div class="CommonHeader">
    <el-row>
      <el-col :span="19">
        <el-row>
          <el-col :span="4">
            <div class="logo" style="display: flex;justify-content: center;">
              <img src="../../assets/logo.png" style="width: 35px;height: 35px;border-radius: 10px;margin-top: 16px;">
            </div>
          </el-col>
          <el-col :span="15">
            <el-menu
                :default-active="router.currentRoute.value.path"
                mode="horizontal"
                @select="handleSelect"
                router
            >
              <el-menu-item
                  v-for="item in navList"
                  v-bind:key="item.index"
                  :index="item.index"
                  :route="item.path"
              >{{ item.label }}
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router>
          <el-menu-item class="little" route="/login">登录</el-menu-item>
          <span class="little" style="height: 60px;line-height: 60px;">|</span>
          <el-menu-item class="little" route="/register">注册</el-menu-item>
          <span class="little" style="height: 60px;line-height: 60px;">|</span>
          <el-menu-item class="little" route="/login" @click="loginOut">退出</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import router from "@/router";

const navList = [{
  index: "1",
  path: "/home",
  label: "小梦官网",
}, {
  index: "2",
  path: "/recycle",
  label: "绿色回收",
}, {
  index: "3",
  path: "/second",
  label: "学长二手",
}, {
  index: "4",
  path: "/open",
  label: "小梦开放平台",
}, {
  index: "5",
  path: "/cooperation",
  label: "社会合作",
}, {
  index: "6",
  path: "/manage",
  label: "账号管理",
}]
const handleSelect = () => {
  console.log('点击了导航栏')
}
const loginOut = () => {
  localStorage.removeItem("user")
}
</script>

<style scoped>
.el-menu {
  width: 100%;
  height: 65px;
  font-weight: 800;
  border-bottom: none;
  background-color: rgba(0, 0, 0, 0);
}

div /deep/ .el-menu-item {
  --el-menu-active-color: #00a563;
  --el-menu-text-color: #fff;
  --el-menu-hover-text-color: #00a563;
  --el-menu-bg-color: rgba(0, 0, 0, 0);
  --el-menu-hover-bg-color: rgba(0, 0, 0, 0);
  --el-menu-item-height: 56px;
  --el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);
  --el-menu-horizontal-sub-item-height: 36px;
  --el-menu-item-font-size: var(--el-font-size-base);
  --el-menu-item-hover-fill: var(--el-color-primary-light-9);
  --el-menu-border-color: none;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0 solid var(--el-menu-active-color);
  color: var(--el-menu-active-color) !important;
}

.el-menu--horizontal > .el-menu-item {
  border-bottom: 0 solid var(--el-menu-active-color);
}

.little {
  color: white;
  font-weight: 400;
}

</style>
