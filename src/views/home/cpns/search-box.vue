<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/images/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 入住时间范围 -->
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayDays }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar
      type="range"
      v-model:show="showCalendar"
      @confirm="onConfirm"
      color="#ff9854"
      :round="false"
    />
    <!-- 价格和人数区域 -->
    <div class="section price-counter border-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字区域 -->
    <div class="section border-gray-line keyword">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="section hot-suggest">
      <template v-for="item in hotSuggests">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
          @click="suggestClick(item)"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="section search-btn">
      <div class="btn" @click="searchClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { formatDate, getStayDays } from "@/utils/day";
import useMainStore from "@/stores/modules/main";
const router = useRouter();

const cityClick = () => {
  router.push("/city");
};

//得到当前城市
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

//获取当前位置
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("获取位置成功", res);
    },
    (err) => {
      console.log("获取位置失败", err);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 1000,
    }
  );
};

//获取热门建议数据
const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);

//点击热门建议跳转到搜索页面并传入数据
const suggestClick = (item) => {
  router.push("/search");
  homeStore.hotSuggest = item.tagText.text;
};

//点击搜索按钮跳转到搜索页面并传入数据
const searchClick = () => {
  router.push({
    path: "/search",
    query: {
      endDate: endDate.value,
      startDate: startDate.value,
      currentCity: currentCity.value.cityName, //也可以在store中拿
    },
  });
};

//日期范围处理
const mainStore = useMainStore();
const { today, tomorrow } = storeToRefs(mainStore);
//利用day.js处理后得到开始/结束日期（x月x日）
const startDate = computed(() => formatDate(today.value));
const endDate = computed(() => formatDate(tomorrow.value));
//利用day.js处理得到入住时间
const stayDays = ref(getStayDays(tomorrow.value, today.value));

const showCalendar = ref(false);

//点击日历中确定按钮
const onConfirm = (value) => {
  //将选中日期信息传回首页对应位置
  mainStore.today = value[0];
  mainStore.tomorrow = value[1];
  stayDays.value = getStayDays(value[1], value[0]);
  //点击确定关闭日历
  showCalendar.value = false;
};
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}
.location {
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 20px;

  .city {
    flex: 1;
    font-size: 15px;
    color: #333;
  }

  .position {
    width: 75px;
    display: flex;
    align-items: center;

    .text {
      color: #666;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 16px;
      height: 16px;
    }
  }
}

.date-range {
  height: 45px;

  .stay {
    flex: 1;
    font-size: 12px;
    color: #666;
    text-align: center;
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  height: 45px;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .end {
    min-width: 22%;
  }

  .date {
    display: flex;
    flex-direction: column;
  }

  .tip {
    font-size: 12px;
    color: #999;
  }

  .time {
    margin-top: 3px;
    font-size: 15px;
    color: #333;
    font-weight: 500;
  }
}
.price-counter {
  margin-top: 10px;
  .start {
    flex: 2;
    border-right: 1px solid var(--line-color);
  }
  .end {
    flex: 1;
    text-align: center;
  }
}

.keyword {
  margin-top: 10px;
}

.hot-suggest {
  margin: 10px 0;
  height: auto;
  .item {
    padding: 4px 8px;
    border-radius: 14px;
    margin: 3px;
    font-size: 12px;
    line-height: 1;
  }
}
.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 38px;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
