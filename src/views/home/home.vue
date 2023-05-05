<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="banner">
      <img src="@/assets/images/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">武汉</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/images/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import navBar from "./cpns/nav-bar.vue";
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    border-top: 1px solid #000;
  }
}

.location {
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    width: 75px;
    display: flex;
    align-items: center;

    .text {
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 16px;
      height: 16px;
    }
  }
}
</style>
