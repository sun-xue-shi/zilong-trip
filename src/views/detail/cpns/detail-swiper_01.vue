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
        <!-- <div class="indicator">{{ active + 1 }}/{{ total }}</div> -->
        <div class="indicator">
          <template v-for="(value, key) in swiperGroup" :key="key">
            <!-- 当前活跃的item背景样式改变 -->
            <!-- key是字符串类型，所以不能用 === -->
            <span
              class="item"
              :class="{
                active: swiperData[active]?.enumPictureCategory == key,
              }"
            >
              <span class="text">{{ getName(value[0].title) }}</span>
              <!-- 当前活跃的item显示对应数据x/x -->
              <span
                class="count"
                v-if="swiperData[active]?.enumPictureCategory == key"
                >{{ getIndex(swiperData[active]) }}/{{ value.length }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
//获取从detail传来的swiperData图片相关数据
const props = defineProps({
  swiperData: {
    type: Array,
    default: () => [],
  },
});

//对数据处理分组
const swiperGroup = {};
//遍历数据，一次循环
for (const item of props.swiperData) {
  let valueArray = swiperGroup[item.enumPictureCategory];
  //首次可能未成功取到值时，创建数组赋值给valueArray，再将valueArray加到swiperGroup中
  if (!valueArray) {
    valueArray = [];
    swiperGroup[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item);
}

// “.*?” 表示非贪心算法，表示要精确的配对。
// “.*”表示贪心算法，表示要尽可能多的匹配
// “()” 表示要获取括弧之间的信息
const nameReg = /【(.*?)】/i;
const getName = (name) => {
  //字符串方法去除数据中的：和【】
  // return name.replace("：", "").replace("】", "").replace("【", "");
  //正则匹配保留数据中【】内的部分
  const results = nameReg.exec(name);
  return results[1]; //返回[0]为原数组，[1]为匹配后数组
};

const getIndex = (item) => {
  //将当前活跃的分类数组赋值给valueArray
  const valueArray = swiperGroup[item.enumPictureCategory];
  //在valueArray中找到与当前活跃数组索引相等的索引返回
  return valueArray.findIndex((data) => data === item) + 1;
};
</script>

<style lang="less" scoped>
.swiper {
  .indicator {
    position: absolute;
    // display: flex;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);

    .item {
      margin: 0 2px;

      &.active {
        padding: 0 3px;
        background-color: #fff;
        color: #000;
        border-radius: 5px;
      }
    }
  }
}
</style>
