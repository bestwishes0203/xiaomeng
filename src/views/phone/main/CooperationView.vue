<template>
  <div>
    <div class="img_item">
      <img src="@/assets/cooperation.jpg"/>
    </div>
    <div class="transform_view"></div>
    <div class="absolute_view">
      <div class="gradle_color"
           style="width: 80%;height: 80vh;transform: translateY(3vh);color: white;margin: 0 auto;border-radius: 40px;">
        <div style="width: 100%;height: 100%;display: flex;flex-direction: column;">
          <div style="width: 100%;height: 100%;flex: 1;display: flex;justify-content: center;align-items: center;">
            <img class="turnBig" style="width: 50%;height: 60%;" src="@/assets/lighting.png"/>
          </div>
          <div
              style="width: 100%;height: 100%;flex: 1;font-size: 20px;color: white;display: flex;align-items: center;justify-content: center;">
            <div style="text-align: left;transform: translateY(-40px);padding: 0 30px;">
              <h1>加入小梦</h1>
              <p>推动和发展有限资源的可持续化利用</p>
              <p>为环保事业做出一份贡献!</p>
              <p>欢迎联系我们!</p>
              <p>400-198-0237</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.img_item {
  width: 100vw;
  height: 100vh;
}

.transform_view {
  transform: translateY(-100vh);
  height: 86vh;
}

.absolute_view {
  position: absolute;
  width: calc(100vw - 0px);
  height: 86vh;
  top: calc(100vh + 0px);
  background: #f1f1f1;
  border: none;
  border-radius: 0;
}


.gradle_color {
  background: #4568dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179)); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*background: #59c173; !* fallback for old browsers *!*/
  /*background: -webkit-linear-gradient(to right, rgb(89, 193, 115), rgb(161, 127, 224), rgb(93, 38, 193)); !* Chrome 10-25, Safari 5.1-6 *!*/
  /*background: linear-gradient(to right, rgb(89, 193, 115), rgb(161, 127, 224), rgb(93, 38, 193)); !* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ *!*/
}

.turnBig:active {
  transform: scale(1.1);
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}

</style>