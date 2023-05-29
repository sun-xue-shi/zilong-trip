<template>
  <div class="intro">
    <detail-section :title="priceIntro.title">
      <div class="introduction">
        {{ priceIntro.introduction }}
      </div>
    </detail-section>
  </div>
</template>

<script setup>
// import { ref, reactive } from 'vue'
import detailSection from "@/components/detail-section/detail-section.vue";
defineProps({
  priceIntro: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped lang="less">
:deep(.title) {
  font-size: 14px;
}
.intro {
  font-size: 14px;

  .introduction {
    font-size: 12px;
    line-height: 18px;
    color: #666;
  }
}
</style>
