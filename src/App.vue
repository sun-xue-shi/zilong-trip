<template>
  <div class="app">
    <!-- keep-alive home组件,类似做了缓存？-->
    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <tab-bar v-show="!route.meta.hideTabber" />
    <loading />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import TabBar from "./components/tab-bar/tabbar.vue";
import loading from "./components/loading/loading.vue";

const route = useRoute();
</script>

<style scoped></style>
