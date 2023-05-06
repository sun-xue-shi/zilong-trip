<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="banner">
      <img src="@/assets/images/home/banner.webp" alt="" />
    </div>
    <search-box />
  </div>
</template>

<script setup>
import navBar from "./cpns/nav-bar.vue";
import searchBox from "./cpns/search-box.vue";
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    border-top: 1px solid #000;
  }
}
</style>
