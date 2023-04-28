<template>
  <div class="ServeView">
    <div>
      <img style="width: 100%; height: 100vh"
           src="@/assets/open.jpg"/>
    </div>
  </div>

  <div class="transform_view">

  </div>

  <div class="absolute_view">
    <div
        style="width: 80%;height: 80vh;transform: translateY(0vh);color: white;margin: 0 auto;display: flex;flex-direction: row;">
      <div class="gradle_color">
        <div class="item">
          <img class="turnBig" src="@/assets/commication.png"/>
          <h1 style="text-align: center;">小梦社区</h1>
          <p style="text-align: center;">赶快加入这个有趣的大家庭吧！</p>
        </div>
      </div>
      <div class="gradle_color">
        <div class="item">
          <img class="turnBig" src="@/assets/more.png"/>
          <h1 style="text-align: center;">小梦建议</h1>
          <p style="text-align: center;">这里有你想要的生活小妙招！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.transform_view {
  transform: translateY(-100vh);
  height: 100vh;
}

.absolute_view {
  position: absolute;
  width: calc(100% - 0px);
  height: 80vh;
  top: calc(100vh + 0px);
  background: #f1f1f1;
  border: none;
  border-radius: 0;
}

.gradle_color {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.turnBig {
  width: 60%;
  height: 60%;
  margin: 0 auto;
}

.item:hover {
  transform: scale(1.05);
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}

.item {
  cursor: pointer;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  margin: 0 auto;
  background: #c6ffdd; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, rgb(251, 215, 134), rgb(247, 121, 125)); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, rgb(251, 215, 134), rgb(247, 121, 125)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>