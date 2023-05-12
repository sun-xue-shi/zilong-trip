<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="banner">
      <img src="@/assets/images/home/banner.webp" alt="" />
    </div>
    <search-box />
    <categories />
    <div class="search-bar" v-if="showSearchBar">666</div>
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

const homeStore = useHomeStore();
homeStore.getHotSuggestData();
homeStore.getCategoryData();
homeStore.getHouseListData();

const { isreachBottom, scrollTop } = useScroll();
watch(isreachBottom, (newValue) => {
  if (newValue) {
    //异步操作：获取到数据后重新改为false
    homeStore.getHouseListData().then(() => {
      isreachBottom.value = false;
    });
  }
});

// const showSearchBar = ref(false);
// watch(scrollTop, (newTop) => {
//   showSearchBar.value = newTop > 100;
// });

const showSearchBar = computed(() => {
  return scrollTop.value >= 100;
});
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    border-top: 1px solid #000;
  }
}
</style>
