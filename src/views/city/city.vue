<template>
  <div class="city top-page">
    <!-- 搜索框 -->
    <van-search
      v-model="searchValue"
      placeholder="城市/区域/位置"
      shape="round"
      show-action
      @cancel="cancelClick"
    />
    <!-- tab栏 -->
    <van-tabs v-model:active="active" color="#ff9854">
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const searchValue = ref("");

const router = useRouter();

const cancelClick = () => {
  router.push("/home");
};
</script>

<style lang="less" scoped></style>
