<template>
  <div class="HomeView">
    <el-container>
      <el-header>
        <CommonHeader/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <CommonFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import CommonHeader from "@/components/pc/CommonHeader.vue";
import CommonFooter from "@/components/pc/CommonFooter.vue";

</script>

<style scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0;
}

.el-header {
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

</style>
