<template>
  <div class="search">
    <h2>您正在搜索{{ hotSuggest }}</h2>
  </div>
  <h2>开始时间:{{ $route.query.startDate }}</h2>
  <h2>结束时间:{{ $route.query.endDate }}</h2>
  <h2>当前城市:{{ $route.query.currentCity }}</h2>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { hotSuggest } = storeToRefs(homeStore);
</script>

<style lang="less" scoped></style>
