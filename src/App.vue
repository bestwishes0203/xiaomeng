<template>
  <router-view/>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import router from "@/router";

const _isMobile = () => {
  return navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
}

onMounted(() => {
  if (_isMobile()) {
    // 跳转至手机端路由
    router.replace("/phone-main");
  } else {
    // 跳转至 pc 端路由
    router.replace("/");
  }
})
</script>

<style>
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  height: 100%;
}

.df-r {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.df-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
