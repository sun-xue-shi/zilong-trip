<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, item)"
      >
        <!-- webpack环境下可以直接require(item.image) -->
        <img v-if="currentIndex !== index" :src="getURL(item.image)" alt="" />
        <img v-else :src="getURL(item.imageActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import { getURL } from "@/utils/get_assets";
import { ref } from "vue";
import { useRouter } from "vue-router";

const currentIndex = ref(0);
const router = useRouter();
const itemClick = (index, item) => {
  currentIndex.value = index;
  router.push(item.path);
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
