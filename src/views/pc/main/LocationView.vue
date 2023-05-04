<template>
  <div class="ServeView">
    <div style="width: 100%; height: 100vh;background: #333333">
      <img style="width: 100%; height: 100vh" src="@/assets/01-second.jpg"/>
    </div>
  </div>

  <div class="transform_view">
    <div
        style="width: 100%;height: 10vh;background: rgba(255,255,255,.0);color: white;font-size: 20px;line-height: 10vh;text-align: center;transform: translateY(calc(90vh - 60px));">
<!--      下划查看服务网点-->
    </div>
  </div>

  <div class="absolute_view">
    <el-card>
      <div style="width: 100%;height: 50px;display: flex;flex-direction: row;align-items: center;justify-content: start;">
        <el-input v-model="input" placeholder="请输入地点名称" style="width: 30%;height: 34px;"/>
        <el-button size="default" type="primary">搜索</el-button>
      </div>

<!--      <el-divider />-->
      <div id="map-container" style="width: 100%; height: 640px;"></div>
    </el-card>
  </div>

</template>

<script>
export default {
  data() {
    return {
      input: '',
    }
  },
  mounted() {
    //开始初始地图
    // eslint-disable-next-line no-undef
    const map = new BMap.Map("map-container");
    // 设置中心点和缩放级别
    // eslint-disable-next-line no-undef
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    // 添加控件，如缩放控件
    // eslint-disable-next-line no-undef
    map.addControl(new BMap.NavigationControl());
    // 开启鼠标滚轮缩放
    // map.enableScrollWheelZoom(true);

    // 定位当前位置
    // eslint-disable-next-line no-undef
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == 0) {
        // eslint-disable-next-line no-undef
        const point = new BMap.Point(r.point.lng, r.point.lat);
        // eslint-disable-next-line no-undef
        const marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.panTo(point); // 显示当前位置
      }
    });
  },
};
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

</style>