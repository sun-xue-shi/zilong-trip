<template>
  <div class="tab-control">
    <van-tabs v-model:active="active" @click-tab="onTabclick">
      <template v-for="(item, index) in title" :key="index">
        <van-tab :title="item"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

//获取detail组件传来的tilte,title绑定names数组
defineProps({
  title: {
    type: Array,
    default: () => [],
  },
});

let active = ref(0);

const emit = defineEmits(["onTabclick"]);
const onTabclick = () => {
  const index = active.value;

  emit("onTabclick", index);
};

const setActive = (index) => {
  active.value = index;
};

//暴露setActive方法，使父组件可以使用
defineExpose({
  setActive,
});
</script>

<style scoped lang="less">
.tab-control {
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  right: 0;
}
</style>
