<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">武汉</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/images/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const cityClick = () => {
  router.push("/city");
};

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
</script>

<style lang="less" scoped>
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
</style>
