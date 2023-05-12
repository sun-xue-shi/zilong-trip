<template>
  <div class="categories">
    <template v-for="item in categories">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  //隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    flex-shrink: 0;
    text-align: center;
    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 5px;
    }
  }
}
</style>
