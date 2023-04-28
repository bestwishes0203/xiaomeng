<template>
  <div>
    <div class="img_item">
      <img src="@/assets/03-manager.jpg"/>
    </div>
    <div class="transform_view"></div>
    <div class="absolute_view"></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.img_item {
  width: 100%;
  height: 100vh;
}

.transform_view {
  transform: translateY(-100vh);
  height: 100vh;
}

.absolute_view {
  position: absolute;
  width: calc(100vw - 0px);
  height: 100vh;
  top: calc(100vh + 0px);
  background: #f1f1f1;
  border: none;
  border-radius: 0;
}

</style>