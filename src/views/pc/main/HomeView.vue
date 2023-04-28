<template>
  <div class="HomeView">
    <el-carousel :interval="5000" arrow="always" height="600px">
      <el-carousel-item v-for="item in swiperList" :key="item">
        <img style="width: 100%; height: 600px;border: none;" :src="item.url"/>
      </el-carousel-item>
    </el-carousel>

    <div>
      <img v-for="item in imgList" :key="item" style="width: 100%; height: 700px" :src="item.url"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const swiperList = ref([{
  url: require('@/assets/01-second.jpg'),
}, {
  url: require('@/assets/02-.jpg'),
}, {
  url: require('@/assets/03-manager.jpg'),
},])

const imgList = ref([{
  url: require('@/assets/open.jpg'),
}, {
  url: require('@/assets/01-second.jpg'),
}, {
  url: require('@/assets/02-.jpg'),
}, {
  url: require('@/assets/03-manager.jpg'),
},])


// const swiperList = ref([{
//   url: "https://mp-f72177b8-1fab-46ad-a38c-c6556eac7a3b.cdn.bspapp.com/cloudstorage/b4f33f7d-236f-4136-826f-19d7e4bdf49e.jpg",
// }, {
//   url: "https://mp-f72177b8-1fab-46ad-a38c-c6556eac7a3b.cdn.bspapp.com/cloudstorage/b33671f7-dd60-45dd-b544-d92f34dd07ce.jpg",
// }, {
//   url: "https://mp-f72177b8-1fab-46ad-a38c-c6556eac7a3b.cdn.bspapp.com/cloudstorage/56999bae-0d0f-4b15-aab9-9b35cd7ef316.jpg",
// },])
//
// const imgList = ref([{
//   url: "https://mp-f72177b8-1fab-46ad-a38c-c6556eac7a3b.cdn.bspapp.com/cloudstorage/8e30f87e-8f9d-478f-86c3-781f1c43547c.jpg",
// }, {
//   url: "https://mp-f72177b8-1fab-46ad-a38c-c6556eac7a3b.cdn.bspapp.com/cloudstorage/b4f33f7d-236f-4136-826f-19d7e4bdf49e.jpg",
// }, {
//   url: "https://mp-f72177b8-1fab-46ad-a38c-c6556eac7a3b.cdn.bspapp.com/cloudstorage/b33671f7-dd60-45dd-b544-d92f34dd07ce.jpg",
// }, {
//   url: "https://mp-f72177b8-1fab-46ad-a38c-c6556eac7a3b.cdn.bspapp.com/cloudstorage/56999bae-0d0f-4b15-aab9-9b35cd7ef316.jpg",
// }])

</script>

<style scoped>
.text {
  color: white;
  font-weight: 800;
  font-size: 34px;
  transform: translateY(-300px);
  padding: 0 100px;
}

.text:nth-child(2n) {
  color: green;
}

.text:nth-child(2n + 1) {
  color: red;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>