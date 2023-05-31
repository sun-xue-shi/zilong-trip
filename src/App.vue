<template>
  <div class="app">
    <!-- keep-alive home 组件-->
    <router-view v-slot="props">
      <!--  -->
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar v-if="!route.meta.hideTabber" />
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
