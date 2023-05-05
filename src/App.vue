<script setup>
import TabBar from "./components/tab-bar/tabbar.vue";
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<style scoped></style>
