<template>
  <div class="city_group">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="city in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="group in groupData.cities">
        <!-- 遍历获取A,B,C...组数据 -->
        <van-index-anchor :index="group.group" />
        <!-- 获取对应组的城市名 -->
        <template v-for="city in group.cities">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import { computed } from "vue";
import { useRouter } from "vue-router";

// 接收city.vue传递过来的groupData所绑定的数据
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

//动态索引 -> 根据数据中group来显示索引（可去掉v字母）
const indexList = computed(() => {
  //得到数据中对应group的字母
  const list = props.groupData.cities.map((item) => item.group);
  //列表前加上#对应“热门”
  list.unshift("#");
  return list;
});

const router = useRouter();
const cityStore = useCityStore();
const cityClick = (city) => {
  cityStore.currentCity = city; //获取点击的城市名，传到首页显示
  router.back(); //返回上一级,即首页,router.push("/home")
};
</script>

<style lang="less" scoped>
//热门列表样式
.list {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;
  padding-right: 25px;
  .city {
    width: 70px;
    height: 28px;
    color: #000;
    font-size: 12px;
    border-radius: 14px;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
