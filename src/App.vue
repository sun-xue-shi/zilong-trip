<template>
  <div class="app">
    <router-view></router-view>
    <!-- <tab-bar v-if="!route.meta.hideTabber" /> -->
    <tab-bar />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import TabBar from "./components/tab-bar/tabbar.vue";

const route = useRoute();
</script>

<style scoped></style>
