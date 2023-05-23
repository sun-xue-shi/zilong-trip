<template>
  <div class="detail">
    <van-nav-bar
      title="详情"
      left-text="首页"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <div class="main" v-if="mainPart">
    <detail-swiper :swiper-data="mainPart.topModule.housePicture.housePics" />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { getDetailInfos } from "@/service";
import { computed, ref } from "vue";
import detailSwiper from "./cpns/detail-swiper.vue";

const route = useRoute();
const router = useRouter();
const houseId = route.params.id;

//发送网络请求获取数据
const detailInfos = ref({});
getDetailInfos(houseId).then((res) => {
  detailInfos.value = res.data.data;
});
const mainPart = computed(() => detailInfos.value.mainPart);

const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped></style>
