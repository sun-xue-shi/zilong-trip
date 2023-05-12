<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houseList" :key="item.houseId">
        <house-item-v-9
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
        >
        </house-item-v-9>
        <house-item-v-3
          v-else="item.discoveryContentType === 3"
          :item-data="item.data"
        >
        </house-item-v-3>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import houseItemV3Vue from "../../../components/house-item-v3/house-item-v3.vue";
import houseItemV9Vue from "../../../components/house-item-v9/house-item-v9.vue";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.content {
  padding: 10px;
  .title {
    font-size: 22px;
    padding: 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
