<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <common-footer></common-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import CommonHeader from "@/components/phone/CommonHeader.vue";
import CommonFooter from "@/components/phone/CommonFooter.vue";
</script>

<style scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0;
  width: 100vw;
  height: auto;
}

.el-header {
  background: rgba(0, 0, 0, .9);
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.el-footer{
  background: rgba(204, 204, 204,.1);
  box-shadow: #ccc 0px -5px 20px 2px;
}
</style>