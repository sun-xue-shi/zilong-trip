<template>
  <div class="tab-bar">
    <!-- vant3 UI组件库实现 -->
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getURL(item.image)"
              alt=""
            />
            <img v-else :src="getURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import { getURL } from "@/utils/get_assets";
import { ref } from "vue";

const currentIndex = ref(0);
</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 26px;
  }
}
</style>
