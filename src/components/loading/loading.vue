<template>
  <div class="loading" v-if="isLoading" @click="loadingClick">
    <div class="bg w-26 h-26">
      <img
        src="@/assets/images/home/full-screen-loading.gif"
        alt=""
        w-17.5
        mb-2
      />
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { isLoading } = storeToRefs(mainStore);

const loadingClick = () => {
  isLoading.value = false;
};
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(@/assets/images/home/loading-bg.png) 0 0 / 100% 100%;
  }
}
</style>
