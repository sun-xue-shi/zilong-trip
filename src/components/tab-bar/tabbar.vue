<template>
  <div class="tab-bar">
    <!-- vant3 UI组件库实现 -->
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <!-- 当前未选中标签显示普通图标 -->
            <img
              v-if="currentIndex !== index"
              :src="getURL(item.image)"
              alt=""
            />
            <!-- 当前未选中标签显示活跃图标 -->
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

const currentIndex = ref(0);

//监听路由改变，找到对应索引，设置currentIndex
const route = useRoute();
watch(route, (newRoute) => {
  //得到tabbarData中满足与当前监听到新路径相同的数组索引
  const index = tabbarData.findIndex((item) => item.path === newRoute.path);
  if (index === -1) return; //找不到时返回-1-->不给currentIndex设置index
  //将当前的currentIndex设置为tabbarData数组的index索引
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
