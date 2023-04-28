<template>
  <div>
    <div class="img_item">
      <img src="@/assets/open.jpg"/>
    </div>
    <div class="transform_view"></div>
    <div class="absolute_view">
      <div class="df-c" style="width: 100%;height: 50%;" v-for="item in list" :key="item">
        <div class="df-c bg-g" style="width: 80%;height: 80%;border-radius: 30px;">
          <div style="width: 50%;height: 50%;">
            <img :src="item.src" alt="">
          </div>
          <div style="color: white;">
            <h1 style="text-align: center;">{{ item.label }}</h1>
            <p style="text-align: center;">{{ item.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const list = [{
  src: require('@/assets/commication.png'),
  label: "小梦社区",
  detail: "赶快加入这个有趣的大家庭吧！",
}, {
  src: require('@/assets/more.png'),
  label: "小梦建议",
  detail: "这里有你想要的生活小妙招！",
},]
</script>

<style scoped>
.img_item {
  width: 100%;
  height: 100vh;
}

.transform_view {
  transform: translateY(-100vh);
  height: 80vh;
}

.absolute_view {
  position: absolute;
  width: calc(100vw - 0px);
  height: 80vh;
  top: calc(100vh + 0px);
  background: #f1f1f1;
  border: none;
  border-radius: 0;
}

.bg-g {
  background: #c6ffdd; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, rgb(251, 215, 134), rgb(247, 121, 125)); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, rgb(251, 215, 134), rgb(247, 121, 125));
}

.bg-g:active {
  transform: scale(1.04);
  transition-duration: 0.1s;
}
</style>