<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="banner">
      <img src="@/assets/images/home/banner.webp" alt="" />
    </div>
    <search-box />
    <categories />
    <div class="search-bar" v-if="showSearchBar">
      <search-bar />
    </div>
    <hot-content />
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import navBar from "./cpns/nav-bar.vue";
import searchBox from "./cpns/search-box.vue";
import useHomeStore from "@/stores/modules/home";
import categories from "./cpns/categories.vue";
import hotContent from "./cpns/hot-content.vue";
import useScroll from "@/hooks/useScroll";
import searchBar from "../../components/search-bar/search-bar.vue";

const homeStore = useHomeStore();
homeStore.getHotSuggestData();
homeStore.getCategoryData();
homeStore.getHouseListData();

const { isreachBottom, scrollTop } = useScroll();
//监听isreachBottom,变化即到达底部,执行回调操作
watch(isreachBottom, (newValue) => {
  if (newValue) {
    //异步操作：发送请求,获取到数据后重新改isreachBottom为false
    homeStore.getHouseListData().then(() => {
      isreachBottom.value = false;
    });
  }
});

//若定义的可响应式数据依赖另一个响应式数据，则可以使用计算属性（computed）
//滑过的高度大于350时显示SearchBar
const showSearchBar = computed(() => {
  return scrollTop.value >= 350;
});
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    border-top: 1px solid #000;
  }
}

.search-bar {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
  z-index: 1;
}
</style>
