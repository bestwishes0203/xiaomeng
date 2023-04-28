<template>
  <div class="ServeView">
    <div style="width: 100%; height: 100vh;background: #333333">
      <img style="width: 100%; height: 100vh" src="@/assets/01-second.jpg"/>
    </div>
  </div>

  <div class="transform_view">
    <div
        style="width: 100%;height: 10vh;background: rgba(255,255,255,.0);color: white;font-size: 20px;line-height: 10vh;text-align: center;transform: translateY(calc(90vh - 60px));">
      下划查看商品分类
    </div>
  </div>

  <div class="absolute_view">
    <div
        style="width: 90%;height:10vh;margin: 0 auto;background:#f1f1f1;color: #333333;font-size: 20px;line-height: 15vh;">
      &ensp;商品分类&ensp;>>>
    </div>
    <div style="width: 90%;height:80vh;margin: 0 auto;background:#f1f1f1;" @click="toSecondMall">
      <el-row>
        <el-col :span="4" style="padding: 10px;width: 100%;height: 80vh;" v-for="item in typeList" :key="item">
          <el-card shadow="hover" style="height: 100%;background: #fff;width: 100%;display: flex;align-items: center;">
            <img style="width: 100%;height: 100%;" :src="item.src" alt="">
          </el-card>
        </el-col>
        <el-col :span="6" style="padding: 10px;width: 100%;height: 80vh;">
          <el-card shadow="hover" style="height: calc(50% - 10px);margin-bottom: 10px;"
                   v-for="item in one_list" :key="item">
            {{ item.label }}
          </el-card>
        </el-col>
        <el-col :span="6" style="padding: 10px;width: 100%;height: 80vh;">
          <el-card style="height: calc(50% - 10px);margin-bottom: 10px;" v-for="item in two_list"
                   :key="item">
            {{ item.label }}
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script lang="ts" setup>
import router from "@/router";

const typeList = [{
  src: require('@/assets/06d75467973ea188caa56e18a67647b4.webp'),
}, {
  src: require('@/assets/d91bb6cf7da0947e8a6e50e03f4daf06.webp'),
}, {
  src: require('@/assets/c9550c95ee33a22dc8db677dada00f09.webp'),
}]

const one_list = [{
  label: '学习用品',
}, {
  label: '电子产品',
}]

const two_list = [{
  label: '生活用品',
}, {
  label: '更多...',
}]

const toSecondMall = () => {
  router.push({name: 'second-mall'});
}
</script>

<style scoped>
.transform_view {
  /*transform: translateY(calc(-100vh + 60px));*/
  transform: translateY(calc(-100vh + 60px));
  height: 100vh;
}

.absolute_view {
  position: absolute;
  width: calc(100% - 0px);
  height: 100vh;
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

.el-col >>> .el-card {
  text-align: center;
  color: #666;
  font-weight: 800;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  /*background: #000; !* fallback for old browsers *!*/
  /*background: -webkit-linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67)); !* Chrome 10-25, Safari 5.1-6 *!*/
  /*background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67)); !* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ *!;*/
}

</style>