<template>
  <div class="ServeView">
    <div style="width: 100%; height: 100vh;background: #333333">
      <img style="width: 100%; height: 100vh" src="@/assets/01-second.jpg"/>
    </div>
  </div>

  <div class="transform_view">
    <div
        style="width: 100%;height: 10vh;background: rgba(255,255,255,.0);color: white;font-size: 12px;line-height: 10vh;text-align: center;transform: translateY(calc(92vh - 60px));">
      下划查看商品分类
    </div>
  </div>

  <div class="absolute_view">
    <div
        style="width: 90%;margin: 0 auto;background:#f1f1f1;color: #333333;font-size: 20px;font-weight: 800;line-height: 10vh;">
      &ensp;商品分类&ensp;>>>
    </div>
    <div style="width: 90%;margin: 0 auto;">
      <el-row>
        <el-col :span="8" style="padding: 0 10px;width: 100%;" v-for="item in typeList" :key="item">
          <el-card shadow="hover"
                   style="background: #fff;width: 100%;display: flex;align-items: center;">
            <img :src="item.src" alt="">
          </el-card>
          <el-card shadow="hover"
                   style="height: 50%;background: #fff;width: 100%;display: flex;align-items: center;transform: translateY(20px);">
            <img :src="item.src" alt="">
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script lang="ts" setup>
const typeList = [{
  src: require('@/assets/06d75467973ea188caa56e18a67647b4.webp'),
}, {
  src: require('@/assets/d91bb6cf7da0947e8a6e50e03f4daf06.webp'),
}, {
  src: require('@/assets/c9550c95ee33a22dc8db677dada00f09.webp'),
}]
</script>

<style scoped>
.transform_view {
  /*transform: translateY(calc(-100vh + 60px));*/
  transform: translateY(calc(-100vh + 50px));
  height: 90vh;
}

.absolute_view {
  position: absolute;
  width: calc(100% - 0px);
  height: 90vh;
  top: calc(100vh + 0px);
  border: none;
  border-radius: 0;
  background: #f1f1f1;
}

div >>> .el-card__body {
  padding: 0 !important;
}

.el-card {
  cursor: pointer;
}

</style>