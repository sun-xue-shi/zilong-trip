<template>
  <div class="swiper">
    <van-swipe
      class="swipe-list"
      :autoplay="3000"
      indicator-color="white"
      lazy-render
    >
      <template v-for="item in swiperData">
        <van-swipe-item>
          <img :src="item.url" alt="" w-full />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
//获取从detail传来的swiperData图片数据
const props = defineProps({
  swiperData: {
    type: Array,
    default: () => [],
  },
});

//对数据处理转换
const swiperGroup = {};
//遍历数据
for (const item of props.swiperData) {
}
</script>

<style lang="less" scoped>
.swiper {
  .indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
