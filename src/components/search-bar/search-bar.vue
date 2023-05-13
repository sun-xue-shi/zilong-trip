<template>
  <div class="search h-11">
    <div class="city">{{ currentCity.cityName }}</div>
    <div class="select-time p-2.5 text-gray-400 relative">
      <div class="item start">
        <div class="name">住</div>
        <div class="date pl-1">{{ startDate }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date pl-1">{{ endDate }}</div>
        <div class="icon-cancel w-2.5 h-2.5 absolute"></div>
      </div>
    </div>
    <div class="content pl-2.5 text-gray-400">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right mt-1">
      <i class="icon-search w-6 h-6"></i>
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { formatDate } from "@/utils/day";
import useCityStore from "@/stores/modules/city";

const mainStore = useMainStore();
const { today, tomorrow } = storeToRefs(mainStore);
const startDate = computed(() => formatDate(today.value, "MM.DD"));
const endDate = computed(() => formatDate(tomorrow.value, "MM.DD"));

const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
</script>

<style lang="less" scoped>
.search {
  display: flex;
  align-items: center;
  // height: 45px;
  background-color: #f2f4f6;
  border-radius: 5px;
  .city {
    margin-left: 5px;
    margin-right: -5px;
    color: #999;
  }

  .select-time {
    // position: relative;
    font-size: 10px;
    // color: #999;
    // padding: 10px;
    border-right: 1px solid #fff;

    .item {
      display: flex;
      line-height: 14px;
      .date {
        font-size: 9px;
        color: #0f0f0f;
        // padding-left: 4px;
      }
    }
    .end {
      .icon-cancel {
        // position: absolute;
        bottom: 10px;
        right: 0;
        // width: 10px;
        // height: 10px;
        display: inline-block;
        background-image: url(../../assets/images/home/home-sprite.png);
        background-position: -199px -155px;
        background-size: 207px 192px;
      }
    }
  }
  .content {
    // padding-left: 10px;
    // color: #999;
    font-size: 13px;
    flex: 1;
  }
  .right {
    display: flex;
    // margin-top: 4px;
    flex: 1;
    margin-right: -100px;
    .icon-search {
      // width: 24px;
      // height: 24px;
      display: inline-block;
      background-image: url(../../assets/images/home/home-sprite.png);
      background-position: -31px -153px;
      background-size: 207px 192px;
    }
  }
}
</style>
