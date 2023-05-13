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
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentIndex = ref(0);

//监听路由改变，找到对应索引，设置currentIndex
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => item.path === newRoute.path);
  if (index === -1) return; //找不到时不给currentIndex设置index
  currentIndex.value = index;
});
</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 26px;
  }
}
</style>
